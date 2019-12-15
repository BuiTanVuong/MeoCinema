var lst_btn = document.querySelectorAll('.tabcontrol .btn-tab button');
var lst_content_tab = document.querySelectorAll('.content-tab .content');

function show_tab(idx){
    lst_btn[idx].style.backgroudColor = "red";
    for(var i = 0 ; i<lst_content_tab.length; i++){
        lst_content_tab[i].style.display = "none";
        lst_btn[i].classList.remove('active');
    }
    lst_content_tab[idx].style.display = "block";
    lst_btn[idx].classList.add('active');
};

$('.control').click(function(){
    var id = $(this).attr('data-id');
    var group = $(this).attr('group');
    $('.'+group).each(function(){
        $(this).removeClass('active');
        $(this).css('display','none');
    });
    $('#'+id).addClass('active');
    $('#'+id).css('display','block');
});

$('#open_form').click(function(){
    $('#login').css('display','block');
});
$('.btn_close').click(function(){
    $('#login').css('display','none');
});
