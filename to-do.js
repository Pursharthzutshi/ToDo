
            const textarea = document.querySelector('textarea');

            const para =  document.getElementById('demo');  


            textarea.addEventListener('change',updateValue);



            function updateValue(e){

                demo.textContent = e.target.value;



                demo.style.color='black';
                demo.style.background='white';
                demo.style.whiteSpace='pre-line';
                demo.style.width = '370px';
                demo.style.height = '20px';
                demo.style.padding = '5px';
                demo.stye.borderStyle='solid';
                demo.stye.borderColor='black';
                demo.stye.borderWidth='2px';
                demo.style.boxShadow='4px 2px 2px ';
                demo.style.fontSize='30px';

            }



            function clearValue(){
                demo.textContent='';
                demo.style.background='whitesmoke';
            }
