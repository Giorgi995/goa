// პრიმიტიული "V"

`მარტივი მნიშვნელობები:
          string;
          integer;
          boolean;
          and others
`


// არაპრიმიტიული  "V"

`რთული მნიშვნელობები:
          array;
          object;
          map;
          set;
          function;
          and others
`
//პრიმიტიული
let name="tack"
let integer=12
let boolean=true

//არა პრიმიტიული
let masivi=[12,14,"naxvamdis"]
let object={name:"Text"}
let and=()=>{console.log(name)}

`heap-მოიცავს ობიექტებს, გამოყოფილი მნიშვნელობები,მაგალოთად new და სხვა.
მუშაობს არა სტრუქტურულად ნელია მაგრამ მოხერხებული ჯირდება მეხსიერების ხელიტ მარტვა

stack-მოისავს პრიმიტიულ ტიპებს:int,str,float,bool,და სხვა.
stack,მუშაობს LIFO პრინციპით.მუშაობს სტრაფად მაგრამ აქვს შესხუდული ზომა და იმათება ავტომატურად`
