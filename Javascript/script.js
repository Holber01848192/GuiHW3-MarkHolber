function getValues2(){


    
                    
               
                var rowLow1 = document.getElementById('xMin').value;
                var rowHigh1 = document.getElementById('xMax').value;
                var colLow1 = document.getElementById('yMin').value;
                var colHigh1 = document.getElementById('yMax').value;
        
                var rowLow = parseInt(rowLow1, 10);
                var rowHigh = parseInt(rowHigh1, 10);
                var colLow = parseInt(colLow1, 10);
                var colHigh = parseInt(colHigh1, 10);
        
                var pass = 'All inputs are valid numbers'
                var fail = 'Not all inputs are valid numbers'
                var fail2 ="Minimum must be lower or equal to Maximum"
                var toHigh = 'Out of bounds, please input number between -50 and 50'

                
        
                 
                if(typeof rowLow === 'number' && typeof rowHigh === 'number' && typeof colLow === 'number' && typeof colHigh === 'number')
                {
                        if((rowLow <= 50 && rowLow >=-50) && (rowHigh <= 50 && rowHigh >=-50) && (colLow <= 50 && colLow >=-50) && (colHigh <= 50 && colHigh >=-50)) 
                        {
                                
                        if(rowLow > rowHigh || colLow > colHigh)
                        {
                                document.getElementById('output5').innerHTML = fail2;
                                return;
                        }
                        
                        document.getElementById('output5').innerHTML = pass;
                       
                
                
           
                    var font = '<table border="1">\n';
                     var body = ' ';
                     var emptySpace = '-'
                     var emptyCell = '-'
             
             
             
                     for(var a = rowLow - 1, a1 = 0; a <= rowHigh; a++, a1++)
                     {
                        
                               
                                if(a1 == 0)
                                {
                                body = body + '<td>';
                                body = body + emptySpace;
                                body = body + '</td>';
                                }
             
                                else
                                {
                                body = body + '<td>';
                                body = body + a;
                                body = body + '</td>';
                                }
                                
             
                        
                     }
                     /*for(var sizeSide = (parseInt(rowHigh1, 10) - parseInt(rowLow1, 10)), sizeVert = (parseInt(colHigh1, 10) - parseInt(colLow1, 10)); sizeSide < 10; sizeVert++, sizeSide++)
                        {
                                body = body + '<td>';
                                body = body + emptyCell;
                                body = body + '</td>';
                        }*/
                    body = body + '<tr>';
                    body = body +'</tr>\n'; 
               
                         for(var b = colLow, b1 = 0; b <= colHigh; b++, b1++)
                         {
             
                               
                                body = body + '<td>';
                                body = body + b;
                                body = body + '</td>';
        
        
                        for(var a = rowLow; a <= rowHigh; a++)
                        {
                            
                                body = body + '<td>';
                                body = body + a * b;
                                body = body + '</td>';
                     
                        }
                  
                        /*for(var sizeSide = (parseInt(rowHigh1, 10) - parseInt(rowLow1, 10)), sizeVert = (parseInt(colHigh1, 10) - parseInt(colLow1, 10)); sizeSide < 10; sizeVert++, sizeSide++)
                        {
                                body = body + '<td>';
                                body = body + emptyCell;
                                body = body + '</td>';
                        }*/
                         
                                body = body + '<tr>';
                                body = body +'</tr>\n'; 
           
                     }
                     var bottom = '</table>';
                     document.getElementById('t1').innerHTML = font + body + bottom;
             
             
                     }
                
                
                else
                {
                        document.getElementById('output5').innerHTML = toHigh;
                        return;
                }
        
                }
                else
                {
                        document.getElementById('output5').innerHTML = fail;
                        return;
                      
                }
                }
        
        
                
        
              
     
     






 

        
      

    
 
 
    
