let index = 1;
$("#addArea").click(function (e) {
  e.preventDefault();
  $(".paragraphs").append(`<div class="area mt-3">
                            <textarea type="text" class="form-control" id="letter" name="letters"
                                placeholder='Paragraphs' required></textarea>
                            <button type='button' class='btn btn-danger' id="remove" onClick='remove(this)'><i class="fas fa-trash"></i></button>
                        </div>`);
  index++;
});

function remove(el) {
  $(el).parent("div").remove();
}

$(() => {
    $("#date").hide()


    $("#schedule").change(function() {
        if(this.checked){
            $('#date').show()
            $("#date-form").attr("disabled",false);
            $('#date-form').attr("required",true);
        }else{
            $('#date').hide()
            $("#date-form").attr("disabled",true);
            $('#date-form').attr("required",false)
        }
    })
})