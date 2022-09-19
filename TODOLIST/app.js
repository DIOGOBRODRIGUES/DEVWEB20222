var main = function (){
    "use strict";

    // na aba "novos esse array ordenara de maneira inversar em quanto que na aba "antigos" esse array será ordenado de maneira inversa.
    var toDOs = [
        "Fazer feira",
        "levar o cachorro pra passear",
        "projeto de dev Web",
        "Terminar de ler o livro",
        "pagar a conta de telefone"
    ];
    // console.log("Hello World!");
    // $(".tabs a:nth-child(1)").on("click",function(){
    //     // deixa todas as abas inativas
    //     $(".tabs span").removeClass("active");
    //     //deixaa primeira aba ativa
    //     $(".tabs a:nth-child(1) span").addClass("active");
    //     // esvazia conteudo principal para que possamos recria-lo
    //     $("main .content").empty();
    //     //retorna falso para não seguirmos o link 
    //     return false;
    // });

    // $(".tabs a:nth-child(2)").on("click",function(){
    //     $(".tabs span").removeClass("active");
    //     $(".tabs a:nth-child(2) span").addClass("active");
    //     $("main .content").empty();
    //     return false;
    // });

    // $(".tabs a:nth-child(3)").on("click",function(){
    //     $(".tabs span").removeClass("active");
    //     $(".tabs a:nth-child(3) span").addClass("active");
    //     $("main .content").empty();
    //     return false;
    // });
///-------------------------------primeira refatoração ------
//     var makeTabActive = function (tabNumber){
//         //constroi seletor a partir de tab Number
//         var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";

//         $(".tabs span").removeClass("active");
//         $(tabSelector).addClass("active");
//         $("main .content").empty();
//     };

//     $(".tabs a:nth-child(1)").on("click",function(){
//         makeTabActive(1);
//         return false;
// });
// $(".tabs a:nth-child(2)").on("click",function(){
//     makeTabActive(2);
//     return false;
// });
// $(".tabs a:nth-child(3)").on("click",function(){
//     makeTabActive(3);
//     return false;
// });

////-------------------------segunda refatoração 

// var tabNumber;

// for(tabNumber = 1; tabNumber <= 3; tabNumber++){
//     var tabSelector = ".tabs a:nth-child(" +  tabNumber + ") span";

//     $(tabSelector).on("click", function(event){
//         $(".tabs span").removeClass("active");
//         $(event.target).addClass("active");
//         return false;
//     });
// }
///-------------------------terceira refatoração

$(".tabs span").toArray().forEach(function(element){
    var $element = $(element)
    //cria um handler click para este elemento

    $element.on("click", function(){
        //criando variavel para exemplo de conteudo da pagina, não deve ser criado na primeira demostração
        var $content;

        $(".tabs span").removeClass("active");
        $element.addClass("active");
        $("main .content").empty();

        if($element.parent().is(":nth-child(1)")){
            $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
        }
        else if($element.parent().is(":nth-child(2)")){
            $content = $("<ul>");
            toDOs.forEach(function(todo){
                $content.append($("<li>").text(todo));
            });
            $("main .content").append($content);
            //console.log("Segunda tab clicada!");
        }
        else if($element.parent().is(":nth-child(3)")){
            console.log("Terceira tab clicada!");
        }
        return false;
    })
});
$(".tabs a:first-child span").trigger("click");

};
$(document).ready(main);