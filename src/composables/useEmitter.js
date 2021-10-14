import mitt from 'mitt'
const emitter = mitt()

// emitter remapping
export default () => {
  return {
    on: (...args) => emitter.on(...args),
    once: (...args) => emitter.once(...args),
    off: (...args) => emitter.off(...args),
    emit: (...args) => emitter.emit(...args)
  }
}