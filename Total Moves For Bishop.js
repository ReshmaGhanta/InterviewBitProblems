module.exports = { 
    //param A : integer
    //param B : integer
    //return an integer
       solve : function(A, B){
       var topLeft = Math.min(A,B) - 1;
   
       var bottomRight = 8 - Math.max(A,B);
    
       var topRight = Math.min(A, 9 - B) - 1;
    
       var bottomLeft = 8 - Math.max(A, 9 - B);
    
       return (topLeft + topRight + bottomRight + bottomLeft);
       }
   };
   