class Timer {
  constructor(settings) {
    this.name = settings.name
    this.start = new Date()
  }
  name
  start
  end
  duration
  get() {
    const duration = this.end ? this.end - this.start : new Date() - this.start
    return { ...this, duration }
  }
  stopTimer() {
    if (this.end) throw new Error('Таймер уже остановлен')
    this.end = new Date()
  }
}
const data = {}
const getAll = () => {
  return Object.values(data).map(timer => timer.get())
}
const getOne = timerName => {
  const existedTimer = data[timerName]
  return existedTimer.get()
}
const createTimer = timerName => {
  const existedTimer = data[timerName]
  if (existedTimer) throw new Error('Таймер с таким именем уже существует')
  data[timerName] = new Timer({ name: timerName })
  return data[timerName].get()
}
const stopTimer = timerName => {
  const existedTimer = data[timerName]
  if (!existedTimer) throw new Error('Таймер с таким именем не существует')
  existedTimer.stopTimer()
  return existedTimer.get()
}
export = { getOne, createTimer, stopTimer, getAll }
