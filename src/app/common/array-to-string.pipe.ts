import { Pipe, PipeTransform } from "@angular/core";
   
@Pipe({
  name: "arrayToString"
})
export class ArrayToStringPipe implements PipeTransform {
  transform(input: Array<String>, sep = ","): string {

    return input.toString();
  }
}