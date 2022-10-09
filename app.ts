//1. Write a ts program to read and print elements of array.
     
    var printElement : string[] = ["ali", "umer", "hussnain"];
    printElement.forEach(element => {
        console.log("Elements of array:", element);
        
       });
     
       
//2. Write a ts program to print all negative elements in an array.
    var negtiveElement: number[] = [1,2,3,4,-4,-6,98,-2];
    negtiveElement.forEach(negative => {
        if(negative<0){
            console.log("Negative elements of an array", negative);
            
        }
    })  
    
    
//3. Write a ts program to find sum of all array elements.



    var sum : number[] = [1,2,3,4,5,5,8,6];
    var forSum : number = 0;

    sum.forEach(allSum =>{
        forSum = forSum + allSum
        console.log("sum of all element", forSum);
        
    })

//4. Write a ts program to find maximum and minimum element in an array.
    var maxAndMin : number [] = [1,2,4,8,65,34,9988,-45]
    console.log("maximum number is:", Math.max(...maxAndMin));
    console.log("minimum number is:", Math.min(...maxAndMin));
    
//5. Write a ts program to find second largest element in an array.
var secondLargest : number[] = [1,2,3,4,5,6,3,88,90];
var secondLargestSort = secondLargest.sort();
console.log(secondLargestSort);

    for (let index = 0; index <= secondLargestSort.length ; index++) {
        if(index == secondLargestSort.length -2){
            console.log("second largest number in array is:", secondLargestSort[index]);
            
        }
        
    }


//6. Write a ts program to count total number of even and odd elements in an array.
   var countOddEven: number[] = [1,2,3,4,5,6,7,8,9];
   var countOdd:number = 0
   var countEven:number = 0
            countOddEven.forEach(check =>{
                if(check != 0){
                    if(check%2==0){
                        countEven++
                    }else{
                        countOdd++
                    }
                }

            })
            console.log("Even is", countEven);
            console.log("odd is", countOdd);

//8. Write a ts program to copy all elements from an array to another array.



var first:number[] = [1, 2, 3];
var second :number[] = [4, 5];
 
first.push(...second);
console.log('copy all element to another arrays:',first);
            

//9. Write a ts program to insert an element in an array.

var simple:string[] = ["ali","umer",'saylani']
            //to insert at first
     console.log("insert at first:", simple.push('Muhammad'));
            //to insert at last
     console.log("to insert at last:", simple.unshift("IT Lab"));

//10. Write a ts program to delete an element from an array at specified position.     
            
            var deleteSpecified : number [] = [1,2,3,4,5,6,7,8,9,10,11,12];
            console.log("delete at specified position splice", deleteSpecified.splice(1,8));

         
//11. Write a ts program to count frequency of each element in an array
            
 //12. Write a ts program to print all unique elements in the array.           
            
 var unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  var ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
  var uniqueAges = ages.filter(unique)
  
  console.log('unique elements is:',uniqueAges)                

  //13. Write a ts program to count total number of duplicate elements in an array.

  const counts = {};
  const sampleArray = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9" ,"13"]
  sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  console.log('dublicate number count are',counts)
               


  //14. Write a ts program to delete all duplicate elements from an array.

 //15. Write a ts program to merge two array to third array.   
        var arr1 : number[] = [1,2,3,4,5]
        var arr2 : number[] = [6,7,8,9,10]
        var arr3 : number[] = [11,12,13,14,15]

        var  arr4 : number[] = arr1.concat(arr2,arr3);
        console.log('merge of two arrays',arr4);

 //16. Write a ts program to find reverse of an array.
    var findReverse : string[] = ['ali', 'naveed']
    console.log('reverse is :', findReverse.reverse());
           
 //17. Write a ts program to put even and odd elements of array in two separate array.  
        var array : number[] = [1,2,3,4,5,6,7,8,9,10,11,12]
        var evenArray : number[] = [] ;
        var oddArray : number[] = [];
          array.forEach(value => {
            if(value%2 ==0){
                evenArray.push(value);

            }else{
                oddArray.push(value)
            }

          })  
          
          console.log("even is :", evenArray);
          console.log("odd is :", oddArray);


 //18. Write a ts program to search an element in an array.
        var searchArray: number[] = [1,2,3,4,5,6,7]
          var b = searchArray.find(element => {
             return element > 6
            
          });

          console.log('if find :', b);
        
          

//19. Write a ts program to sort array elements in ascending or descending order.



                //assending order and descending

          var checkAssAndDess : number [] = [1,4,6,8,3,4,9,0,14,13,12,11,19,18,16,15]
          

          console.log
          ('ascending',checkAssAndDess.sort((a, b) => a - b)); 
          console.log
          ('descending',checkAssAndDess.sort((a, b) => b - a)); 


//20. Write a ts program to sort even and odd elements of array separately.

var checkEvenAndOdd : number[] = [1,2,3,4,5,6,7,8,9,10,11,12]
         var forEven = checkEvenAndOdd.filter(value => {
               return value%2==0
            })
           console.log('for Even',forEven.sort((a,b)=> a-b));

           var forOdd = checkEvenAndOdd.filter(value => {
            return value%2!=0
         })
        console.log('for Odd',forOdd.sort((a,b)=> a-b));   
            
           
            


             
         

          
          


          



                






  






