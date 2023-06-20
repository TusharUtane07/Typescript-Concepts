// // let username = "Tushar Utane is Awesome Developer"
// // console.log(username)

// let myName: string;
// let meaningOfLife: number;
// let isLoading: boolean;
// let album: any;// This will defeat typescript because we can store any type of data here;

// myName = "Tushar Utane";
// meaningOfLife = 34;
// isLoading = true;
// album = "amazing"
// album = 34;

// // There's concept of union type were we can say it can be of either this type or another type:
// let unionType: number | string;
// unionType = "amazing";
// unionType = 34;
// // above says it can be either string or number;

// // For Regular Expression types there is this:
// let re: RegExp = /\w+/g;

// // Chapter: 3 starts here:
// // arrays:
// let strArr = ['Tushar', "Utane", 'This array is reffered as String only by default because we have not specified the type'];
// let strNum = [45, 'fortyfive'];// This specified with number & string type by default so we can add only number or string data in it.
// let anyOfThem = [34, "thirtyfour", true];// now this will be reffered as boolean, stirng and number type and we can add or delete number, string and boolean data inside it.
// // Typescript will inffer empty array as any type because we can add anything in an empty array.
// // so if we want a empty array to be only string below syntax can help in that:
// let strarray: string[] = [];
// let strNumber: (string[] | number[]) = []

// //Tuple
// let tup1: [string, number] = ['data', 34];
// let tup2: [string, number, boolean] = ['data', 34, true];
// // tuple is fixed length and order of data should be the same.

// //Object
// let myObj: object;
// myObj = [];// here typeof object will be still object although it is assigned an array
// myObj = tup2;// this has no problem with it.
// myObj = {}

// let exampleObj = {
//     name1: 'tushar',
//     name2: 'utane'
// }// we can only assign this value with string values only because they are specified with that type by Typescript.

// // we can explicitly define the type and then that could be reffered by anything that should have that type only.
// type thisIsExpType = {
//     name: string,
//     age?: number,
//     is18plus: boolean
// }// this is type which is assigned above and that can be specified as:
// const studentObj: thisIsExpType = {
//     name: 'Trupti',
//     // age: 23,
//     is18plus: true
// }// so as it says its type of that so it will need to have all the values but we can also set that to be option by ? this changed the above one.

// // Interface and type is similar we mention thisIsExpType
// interface thisIsExpType2 {
//     name: string,
//     age?: number,
//     is18plus: boolean
// }// we don't need to add = to sign in interface its similar to type except = sign

// //Enum
// enum grade {
//     a = 1, // as it is assigned 1 then other will be 2,3,4,5 respectively & if we haven't did that then it will be 0,1,2,3, respectively.
//     b,
//     c,
//     d,
//     e
// }

// // Chapter: 4: Function starts here:
// // Type Aliases
// type stringOrNumber = string | number;
// type stringOrNumberArray = (string | number)[]
// // this is possible with type keyword
// //but we cannot do that with interfaces because interfaces can be termed with object or class

// // litreal type
// let myName: 'Tushar';// here we specificaly set the type of myName will Tushar only other name will throw error.
// // more specificaly it can be used as below:
// let userName: 'Tushar' | 'frenzy' | 'goli'; // any one of them
// userName = 'frenzy'// so if we set any of the above it will throw error again.

// // functions
// const add = (a: number, b: number): number => {
//     return a + b;
// }

// const logMsg = (message: any): void => {
//     console.log(message)
// }// here message is any so there is nothing to return therefore its return type is by default void and we can explicitly give void to the function which is not returning anything.

// logMsg("tushar is amazing programmer")
// logMsg(add(2, 2));

// type mathFunction = (num1: number, num2: number) => number;
// interface mathFunction2 { (num1: number, num2: number): number }
// //alternative to type with some other rules to define

// // we created a type which says 1st and 2nd number will perform any action and then will return the number type only without this also works but good practice to add this kind of types;

// const subs: mathFunction = (c, d) => {
//     return c - d;
// }
// const multiply: mathFunction = function (e, f) {
//     return e * f;
// }

// // Optional parameters
// const addAll = (number1: number, number2: number, number3?: number): number => {
//     // if the parameter is optional we can add quetion mark as aboue number3 parameter is but it will throw error until we add a typeGaurd there using if statement like below:
//     if (typeof number3 !== 'undefined') {
//         return number1 + number2 + number3;
//     }
//     return number1 + number2;
// }

// //  If want to provide default value rather that the above one we can do this:
// // even if the value is not provided while calling the function it will explicitly set the value as 2 given below:
// const sumAll = (number1: number, number2: number, number3: number = 2): number => {
//     return number1 + number2 + number3;
// }
// // if the first parameter is given a default value and the time of calling we give something to second parameter it automatically sets that to first parameter so for that we have to pass undefined:
// const mulAll = (number1: number = 10, number2: number, number3: number = 2): number => {
//     return number1 * number2 * number3;
// }
// logMsg(mulAll(undefined, 12))//like this, but the above type alias or interface function for math will not work here because it has a specific type there

// // Rest parameters

// const total = (...nums: number[]): number => {
//     return nums.reduce((prev, curr) => prev + curr)
// }// we will not pass array in parameter we will just pass the number we want total of because it is using rest parameters
// logMsg(total(1, 2, 23, 3));

// const errorMsg = (errMsg: string) => {
//     throw new Error(errMsg)
// }// its return type is by default never this type is basically for whenever function throws error explictily
// // better example for this is
// const infinit = () => {
//     let i: number = 1
//     while (true) {
//         i++;
//         if (i > 100) break
//     }
// }// this is never type and we don't want infinite loop anytime in our code so ts helps us by defining this. whenever we have return type never we need to do something for that function. like adding if statement. after that if statement the return type will be something else.

// // Chapter 5 : starts here;
// type one = string;
// type two = string | number;
// type three = 'hello'

// // converting more or less specific
// let a: one = 'Tushar'
// let b = a as two;// less specific
// let c = a as three;// here we are more specific

// let d = <one>'world'// this the way of setting type alternative to as keyword
// let e = <string | number>'tushar'// this are not used in tsx actually doesn't work in tsx.

// const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): string | number => {
//     if (c === 'add') return a + b;
//     return ' ' + a + b;
// }

// const calculator = {
//     add(a: number, b: number): number {
//         return a + b;
//     },
//     substract(a: number, b: number): number {
//         return a - b;
//     }
// }
// console.log(calculator.add(5, 6));
// console.log(calculator.substract(5, 6));

// Chapter: 5 classes starts here:
// class Coder {
//     // name: string; we can remove those if we add visibility modifiers in front of params in constructor;
//     // music: string;
//     // age: number;
//     // lang: string;

//     constructor (
//         // public and readonly both can be added to one param as well
//         public name:string,
//         readonly music: string,
//         private age: number,// age can only accessed within this class
//         protected lang:string = "Typescript"// lang can be accessed within this class and its subclass.
//         ){
//         // this.name = name;
//         // this.age = age;
//         // this.lang = lang;
//         // this.music = music; if we have visibility modifiers these are not needed
//     }

//     public getAge (){
//         return `Hello, ${this.age}`
//     }
// }
// // const tushar = new Coder("Tushar", "Rap", 19, "Typescript")
// // console.log(tushar.getAge());

// class Pac extends Coder{
//     constructor
//     (
//         public computer: string,
//         name: string,
//         age: number,
//         music: string,
//     )
//     {
//         super(name, music, age)
//         this.computer = computer
//     }
//     public getLang(){
//         return `I write ${this.lang}`
//     }
// }
// const sara = new Pac ('mac', 'sara', 34, 'rap')
// console.log(sara.getLang())

// interface Musician {
//     name: string,
//     instrument: string,
//     play(action: string) : string
// }

// class Guitarist implements Musician{
//     name: string
//     instrument: string 
     
//     constructor(name: string, instrument: string){
//         this.name = name
//         this.instrument = instrument
//     }

//     play(action: string): string {
//         return `${this.name} ${action} the ${this.instrument}`
//     }
// }

// const stan = new Guitarist ('Altaf Shaikh', 'Mic');
// console.log(stan.play('spits on'))
///////////////////////////////////////////
// class Peeps {
//     static count: number = 0// we can access static without creating the instance of class
//     static getCount(): number{
//         return Peeps.count
//     }

//     public id: number
//     constructor(public name: string){
//         this.name = name
//         this.id = ++Peeps.count
//     }
// }

// const Tushar = new Peeps("Tushar")
// const Nike = new Peeps("Nike")
// const Sammy = new Peeps("Sammy")

// console.log(Peeps.getCount())// we all the above instances are commented still we get the count 0 because it gives the count of the instances and we can access statics without the instance of the class.
// console.log(`The id of the ${Tushar.name} is: `, Tushar.id)
// console.log(`The id of the ${Nike.name} is: `, Nike.id)
// console.log(`The id of the ${Sammy.name} is: `, Sammy.id)

//////////Getters and Setters//////////////////
// class Bands {
//     private dataState : string[]

//     constructor(){
//         this.dataState = []
//     }

//     public get data() : string[]{
//         return this.dataState
//     }
//     public set data(value: string[]){
//         if(Array.isArray(value) && value.every(el => typeof el === 'string')){
//             this.dataState = value
//             return
//         }else throw new Error("Params passed in are not Array of Strings")
//     }
// }

// const myBand = new Bands()
// myBand.data = ["Tushar", "utane", "amazing", "programmer"]
// console.log(myBand.data)
// myBand.data = [...myBand.data, "and", "wants to earn 12lpa as fresher"]
// console.log(myBand.data)

// Chapter 6 : Index signature and keyup
// supposing we don't know the property name and so we can do this instead for properties:
// interface TransactionObj{// this is index signature 
//     readonly /* we can assing this as well so that it cannot be assigned below*/[index: string ] : number// this can be union type as well number | string etc. but the key should be string it can be other thing as well
// }// This shows that if don't know the name of the key and we want to set the type for that before so we can use this index signature for avoiding the names and to get the properties dynamically like we did below.
// but the above index signature we give can give us problems like there is no "tushar" property but if we try to access that it will give us undefined why that is so because it knows that string can be key and value would be always a number but that property is not present so it will give us undefined so for that the solution could be that index signature line can be copied to the normal interface with property name. so that properties present will be accessed Like this: 
// interface TransactionObj{
//     readonly [index: string] : number
//     Pizza: number,
//     Books: number,
//     Job: number
// }
// const todaysTransaction : TransactionObj = {
//     Pizza: -10,
//     Books: -5,
//     Job:  50
// }

// console.log(todaysTransaction.Books)
// console.log(todaysTransaction["Books])

// let prop : string = 'Pizza'
// console.log(todaysTransaction[prop])

// const todaysNet = (transactions: TransactionObj) :number => { 
//     let total = 0;
//     for (const transaction in transactions) {
//             total += transactions[transaction]
//         }
//         return total
// }
// console.log(todaysNet(todaysTransaction))

// ///////////////////
// interface Student {
//     // [key: string] : number | string | number[] | undefined
//     name: string
//     GPA: number
//     classes ?: number[]
// }
// const student : Student = {
//     name: 'Doug',
//     GPA: 3.5,
//     classes: [200, 300]
// }
// // console.log(student.test) if we try to access the property that doesn't exists returns undefind.
// // so there is index signature provided in interface but if we comment that out then error will occur so for that we have keyof keyword.
// for(const key in student){
//     console.log(`${key}: ${student[key as keyof Student]}`)// this is how the keyof is used.
//     // keyof creates the union type. 
// }
// we want to access keys dynamically without providing the Student as interface type we can do this instead:
// Object.keys(student).map(key => console.log(student[key as keyof typeof student]))
// One more example of keyof with function:
// const logStudentKey = (student:Student, key : keyof Student): void => {
//     console.log(`Student ${key}: ${student[key]}`)
// }       
// logStudentKey(student, "name")

///////////////////
// interface Income{
//     [key: string]: number// but here we can not pass litreals types
// }
// so for that we can do:
// type Streams = 'salary' | 'freelance' | 'sidehustle';// litreal types
// type Income = Record<Streams, number | string>

// const montlyIncome : Income = {
//     salary : 5000,
//     freelance: 50000,
//     sidehustle: 1000000
// }

// for (const revenue in montlyIncome){
//     console.log(montlyIncome[revenue as keyof Income])as we added record utility type there so for that we have to use keyof keyword for justifying the ts.
// }

//  chapter 8: Generics
// const echo = <T>(args: T): T => args

// const isObj = <T>(arg:T): boolean => {
//     return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
// }// Generics are used for whenever we provide any type to the function it will be of any type so that depends on user what type he is gonna put so for that case that we don't know what is the type of the function is we can add generics in funcitons.

// console.log(isObj(true))
// console.log(isObj('jhon'))
// console.log(isObj([1,2,3]))
// console.log(isObj({name: 'jhon'}))
// console.log(isObj(null))

// const isTrue = <T>(arg: T) : {arg: T, is: boolean} => {
//     if(Array.isArray(arg) && !arg.length){
//         return {arg, is: false}
//     }
//     if(isObj(arg) && !Object.keys(arg as keyof T).length){
//         return {arg, is: false}
//     }
//     return {arg, is: !!arg}
// }
/// Check out the remaining code on github here the Link:
// https://github.com/gitdagray/typescript-course

// chapter 9 : Utility Types
// interface Assignment {
//     studentId: string,
//     title: string,
//     grade: number,
//     verified?: boolean
// }

// const updateAssignment = (assign: Assignment, propsToUpdate: Partial <Assignment>): Assignment => {
//     return {...assign, ...propsToUpdate}
// }
// //  the Partial<T> utility type is used to create a new type that has all the properties of the original type T, but with each property being optional. It allows you to express that a given object may only have some of the properties defined, while leaving the other properties as optional or undefined.

// const assign1 : Assignment = {
//     studentId: "stud1",
//     title: "final project",
//     grade: 0,
//     verified: false
// }
// console.log(updateAssignment(assign1, {grade: 95}))
// const assignGradded : Assignment = updateAssignment(assign1, {grade: 95})

// There are many utility types present in ts:
//& 1. Partial<T>: Creates a type with all properties of T set as optional.
//& 2. Required<T>: Creates a type with all properties of T set as required.
//& 3. Readonly<T>: Creates a type with all properties of T set as readonly.
//& 4. Pick<T, K>: Creates a type by picking specific properties K from T.
//& 5. Omit<T, K>: Creates a type by omitting specific properties K from T.
//& 6. Record<K, T>: Creates an object type with keys of type K and values of type T.
//& 7. Exclude<T, U>: Creates a type by excluding types from T that are assignable to U.
//& 8. Extract<T, U>: Creates a type by extracting types from T that are assignable to U.
//& 9. NonNullable<T>: Creates a type by excluding null and undefined from T.
//& 10. ReturnType<T>: Obtains the return type of a function type T.
//& 11. Parameters<T>: Obtains the parameter types of a function type T.
//& 12. ConstructorParameters<T>: Obtains the parameter types of a constructor function type T.
//& 13. ThisType<T>: Specifies the type of this within a function or object literal.

//* required and readonly:
// const recordAssignment = (assign: Required <Assignment>): Assignment => {
//     return assign// it requires all the properties present in the type present
// }

// const assignVerified : Readonly<Assignment> = {
//     ...assignGradded, verified: true// this utility type does not support re-assignment because it is readonly
// }

// console.log(recordAssignment({...assignGradded, verified: true}))

// //* Record (utility type) 
// const hexColor: Record<string, string> = {
//     red: '#faeeeo',
//     green: '#00ff00',
//     blue: '#303665'
// }

// type Student = "Sara" | "Kelly"
// type LetterGrades = "A" | "B" | "C" | "D" | "U"

// const finalGrades : Record<Student, LetterGrades> = {
//     Sara : "A",// In these we used record which says p1 and p2 will be of which type and that type should satisfy the ts. 
//     Kelly: "B"
// }
// // This can be done using interface obviously.
// interface Grades {
//     assign1: number,
//     assign2: number
// }
// const gradeData : Record<Student, Grades> = {
//     Sara: {assign1: 23, assign2: 34},
//     Kelly: {assign1: 45, assign2: 56}
// }

//* Pick and Omit
// interface Assignment {
//     studentId: string,
//     title: string,
//     grade: number,
//     verified?: boolean
// }
// type AssignResult = Pick<Assignment, "studentId" | "grade"> 
// Pick is used to pick any value like the above from the type provided like Assignment.
// const score : AssignResult = {
//     studentId: 'stud1',
//     grade: 85
// }

// type AssignPreview = Omit <Assignment, "grade" | "verified">
// const preview: AssignPreview = {
//     studentId: 'stud1',
//     title: 'Final Project'// Omit: removes the properties we provide as p1 and p2 or whatever from the type like Assingment we did above. It won't like if we write here grade because grade is omitted.
// }

//* Exclude and Extract
// this don't directly work with interface this can work with the type of interfaces union, Indirectly its interface only but directly it is of Type.(String litreal union types)

// type LetterGrades = "A" | "B" | "C" | "D" | "U"// union of string litreals

// type AdjustedGrades = Exclude<LetterGrades, "U"> // it removes the passed one and remaining it consists
// type HighGrades = Extract<LetterGrades, "A" | "B">// It extracts all the other grades and given are present in it.
// const grade1 : AdjustedGrades = "A"// it can not have "U" because it is excluded
// const grade2 : HighGrades = "B"// it can only have "A" and "B" because they both are extracted from letter grades type.

// * nonnullable type
// type AllPossibleName = 'Dave' | 'Gray' | null | undefined
// const nameIs : AllPossibleName = 'Dave'// it removes all the values that are null or undefined and given can only be used that are not null and undefined.

// * ReturnType
// const createNewAssign = (title: string, points: number) => {
//     return { title, points}
// }
// type NewAssign = ReturnType<typeof createNewAssign>
// const tsAssign : NewAssign = createNewAssign("Utility Types", 33);
// Obtains the return type of a function type we provide to it.

// * Parameters
const createNewAssign1 = (title: string, points: number) => {
    return { title, points}
}
type AssignParams = Parameters<typeof createNewAssign1>
const assignArgs : AssignParams = ["Utility", 200]// 
// Obtains the parameter types of a function type we provide.

//* Awaited : new type helps in ReturnType of a Promise.
// interface User {
//     id: number,
//     name: string,
//     username: string,
//     email: string
// }

// const fetchUser = async () : Promise<User[]> => {
//     const data = await fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => {
//         return res.json()
//     })
//     .catch(err => {
//         if(err instanceof Error){
//             console.log(err.message)
//         }
//     })
//     return data
// }
// type fetchUsersReturnType = Awaited<ReturnType<typeof fetchUser>>
// fetchUser().then(res => console.log(res))