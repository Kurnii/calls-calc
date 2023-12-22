function plus_function(input_name){
    document.querySelector(input_name).value++;
    document.querySelector('.calls_quantity').value++;
  }  
  function minus_function(input_name){
    document.querySelector(input_name).value--;
    document.querySelector('.calls_quantity').value--;
  }
  function refresh_function(){
    const result_list = document.querySelectorAll('input');
    for(let i=0; i<result_list.length; i++) {
      result_list[i].value = 0;
    }
    document.querySelector('.calls_quantity').value = 0;
  }