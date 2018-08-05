export const captureStream = (stream) => {
  var oldWrite = stream.write
  var buf = []
  stream.write = function (chunk) {
    buf.push(chunk.toString().replace(/\n$/, '')) // chunk is a String or Buffer
    //oldWrite.apply(stream, arguments)
  }

  return {
    destroy: function destroy () {
      stream.write = oldWrite
    },
    captured: function () {
      return buf.length > 1 ? buf : buf[0]
    }
  }
}