export class ErrorPrinter {
   protected message: string;
   protected date: Date;

   constructor(message: string, date: Date) {
      this.message = message;
      this.date = new Date()
   }

   onError(): void {
      console.log(this.message + " - " + this.date)
   }
}