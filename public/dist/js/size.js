
  $(document).ready(function(){
     $('#size').change(function(){


         var size = $('#size').val();
         var proDum = $('#proDum').val();

          $.ajax({
                    type: 'get',
                    dataType: 'html',
                    url: '<?php echo url('/selectSize');?>',

                    data: "size=" + size + "& proDum=" + proDum,
                    success: function (response) {
                        console.log(response);
                        
                    }
                });
     });
  });
