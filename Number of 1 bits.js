module.exports = { 
	//param A : integer
	//return an integer
	numSetBits : function(A){
             let count=0;
                while(A!=0){
                    A=A&(A-1);
                    count++;
                }
         return count
	}
};