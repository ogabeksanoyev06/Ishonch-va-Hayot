let UUID = 0

export default function uniqueId() {
  const getId = () => {
    UUID++
    return UUID
  }
  return {
    getId
  }
}
