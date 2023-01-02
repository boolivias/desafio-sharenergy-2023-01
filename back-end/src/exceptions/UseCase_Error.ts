class UseCase_Error extends Error {
  constructor(
    public statusResponse: number,
    public messageResponse: string,
    public message: string
  ) {
    super(message);
  }

  print() {
    console.error(this.message)
    console.error(this.stack)
  }
}

export default UseCase_Error