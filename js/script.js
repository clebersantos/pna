jQuery( function(){

    // slide
    jQuery('.section-cycle').flexslider({
        animation: "slide",
        controlsContainer: ".section-cycle .navigation",
        selector: ".section-body > .post",
        useCSS: false,
        minItems: 1,
        maxItems: 1,
        namespace: ""
    });

    // hack para tirar o estilo do tema pai
    jQuery( "div.widget_tag_cloud" ).toggleClass( "widget_tag_cloud", "widget_tag_cloud2" );

    jQuery( ".actions .post" ).on( "click", function() {
        jQuery( this ).addClass("loading");
    });

    // jQuery( ".register-login a " ).on( "click", function() {
    //    return true;
    // });

    /* ----------------------------------------------------------------------------
    *    Fixar o botão de voltar para o topo
    *  ---------------------------------------------------------------------------*/
    jQuery(window).scroll(function() {

        var scrollTop = jQuery(window).scrollTop();
       
        if (scrollTop > 45) {
            jQuery('.tothetop').addClass('fixed');
        } else {
            jQuery('.tothetop').removeClass('fixed');
        }
    
    });


    jQuery(window).load(function($) {

        if( jQuery('#menu-abas li:not(:first)' ).hasClass('current') || jQuery.urlParam('init') ) {

            jQuery('.page-template-template_side_comment').animate({
                scrollTop: jQuery('#menu-abas li.current').offset().top - 35
              
            }, 500);
        }

     });

    jQuery.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null){
           return null;
        }
        else{
           return results[1] || 0;
        }
    }

});



jQuery(function ($) {
    

    if (typeof(require) != 'undefined') {

        // Templates de comentário
        // require.register("side-comments/js/helpers/mobile-check.js", function (exports, require, module) {
        //     module.exports = function () {
        //         var check = false;
        //         (function (a) {
        //             if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true
        //         })(navigator.userAgent || navigator.vendor || window.opera);
        //         return check;
        //     }
        // });

        require.register("side-comments/templates/section.html", function (exports, require, module) {

            module.exports = '<div class="side-comment <%= sectionClasses %>">\n  ' +
            '                   <a href="#" class="marker">\n    <span><%= comments.length %></span>\n  </a>\n  \n  ' +
            '                   <div class="comments-wrapper">\n    ' +
            '                       <i class="fa fa-times" onClick="document.body.click();"></i>' +
            '                       <a href="#" class="add-comment" data-parent="0" data-comment="">Deixe sua opinião</a>\n    \n  ' +
            '                       <% if (pna.comments_open){ %>\n     ' +  
            '                           <div class="comment-form" data-parent="0" data-comment=""><div class="comment-box register-login">' +
            '                               <p class="author-name"><br>Comentários estão encerrados.</p>' +
            '                           </div></div>' +          
            '                       <% }else if (currentUser && currentUser.id != 9999){ %>\n     ' +
            '                           <div class="comment-form" data-parent="0" data-comment="">\n        ' +
            '                               <div class="author-avatar">\n          ' +
            '                                   <img src="<%= currentUser.avatarUrl %>">\n        ' +
            '                               </div>\n        ' +
            '                               <p class="author-name">\n          <%= currentUser.name %>\n        </p>\n        ' +
            '                               <p class="text-description">\n Escreva aqui seu comentário</p>\n        ' +
            '                               <div class="comment-box right-of-avatar" contenteditable="true" data-placeholder-content="Deixe sua opinião..."></div>\n        ' +
            '                               <div class="actions right-of-avatar">\n          ' +
            '                                   <a href="#" class="action-link cancel" data-parent="0" data-comment="">Fechar</a>\n        ' +
            '                                   <a href="#" class="action-link post" data-parent="0" data-comment="">Enviar</a>\n          ' +
            '                               </div>\n      ' +
            '                          </div>\n    ' +
            '                       <% } else { %>\n  ' +
            '                           <div class="comment-form" data-parent="0" data-comment=""><div class="comment-box register-login">' +
            '                               <p class="author-name">Faça login para comentar.</p>' +
            '                               <p><a href="<%= pna.login_url %>" class="acess-link">Login</a> ou ' +
            '                               <a href="<%= pna.signup_url %>" class="acess-link">Cadastrar</a>.</p>' +
            '                           </div></div>' +
            '                       <% } %>' +
            '                           <ul class="comments" data-root-id="0">\n      ' +
            '                               <% _.each(comments, function( comment ){ %>\n        ' +
            '                                   <%= _.template(commentTemplate, { comment: comment, currentUser: currentUser }) %>\n      ' +
            '                               <% }) %>\n    ' +
            '                           </ul>\n    \n    ' +
            '                   </div>\n' +
            '                </div>';
        });

        
    
        require.register("side-comments/templates/comment.html", function (exports, require, module) {
            module.exports = '<li data-comment-id="<%= comment.commentID %>" data-parent-id="<%= comment.parentID%>">\n  ' +
            '                   <div class="author-avatar">\n  ' +
            '                       <img src="<%= comment.authorAvatarUrl %>">\n  ' +
            '                   </div>\n  ' +
            '                       <p class="author-name right-of-avatar">\n    <%= comment.authorName %>\n  </p>\n  ' +
            '                       <% if( comment.authorSegmento ) { %>\n' +
            '                           <p class="text-description segmento">Área de atuação: <%= comment.authorSegmento %></p>\n' +
            '                        <% } %>' +
            '                       <% if( comment.authorManifestacao ) { %>\n' +
            '                           <p class="text-description manifestacao">Tipo de Contribuição: <%= comment.authorManifestacao %></p>\n' +
            '                        <% } %>' +
            '                       <% if( comment.authorManifestacao == "Institucional") { %>\n' +
            '                           <p class="text-description instituicao">Instituição: <%= comment.authorInstituicao %></p>\n' +
            '                        <% } %>' +
            '                       <p class="comment right-of-avatar">\n    <%= comment.comment %>\n  </p>\n  ' +
            '                       <a href="#" class="add-reply" data-parent="<%= comment.parentID%>" data-comment="<%= comment.commentID %>">Responder</a>\n    \n  ' +
            '                           <% if (currentUser && currentUser.id != 9999){ %>\n     ' +
            '                                <div class="comment-form" data-parent="<%= comment.parentID%>" data-comment="<%= comment.commentID %>">\n        ' +
            '                               <div class="author-avatar">\n          ' +
            '                                    <img src="<%= currentUser.avatarUrl %>">\n        ' +
            '                               </div>\n        ' +
            '                               <p class="author-name"><%= currentUser.name %></p>\n        ' +
            '                               <div class="comment-box right-of-avatar" contenteditable="true" data-parent="<%= comment.parentID%>" data-comment="<%= comment.commentID %>" data-placeholder-content="Responder o comentário..." placeholder="Responder o comentário...">' +
            '                                   </div>\n        ' +
            '                               <div class="actions right-of-avatar">\n          ' +
            '                                 <a href="#" class="action-link cancel" data-parent="<%= comment.parentID %>" data-comment="<%= comment.commentID %>">Cancelar</a>\n        ' +
            '                                 <a href="#" class="action-link post" data-parent="<%= comment.parentID %>" data-comment="<%= comment.commentID %>">Enviar</a>\n          ' +
            '                               </div>\n      ' +
            '                                   </div>\n    ' +
            '                           <% } else { %>\n  ' +
            '                               <div class="comment-form" data-parent="<%= comment.parentID%>" data-comment="<%= comment.commentID %>"><div class="comment-box register-login">' +
            '                                   <p class="author-name">Faça login para comentar.</p>' +
            '                                   <p><a href="<%= pna.login_url %>">Login</a> ou ' +
            '                                   <a href="<%= pna.signup_url %>">Cadastrar</a>.</p>' +
            '                               </div></div>' +
            '                           <% } %>' +
            '                       <% if (currentUser && comment.authorId === currentUser.id){ %>\n  ' +
            '                           <a href="#" class="action-link delete">Apagar</a>\n  ' +
            '                       <% } %>\n' +
            '                   </li>'; 
        });
    }


    
jQuery( function($){

    function mb_strlen( str )
    {
        var len = 0;

        for( var i = 0; i < str.length; i++ ) {
            len += str.charCodeAt( i ) < 0 || str.charCodeAt( i ) > 255 ? 2 : 1;
        }

        return len;
    }

    // limita a quantidade de caracteres nos comentários
    jQuery( '.comment-form-comment textarea, .logged-in .comment-box'   ).each( function() {
        var limit       = 1000;
        if( jQuery( this ).is('textarea') )
            var text        = jQuery( this ).val();
        else {
            var text        = jQuery( this ).html();
        }

        var text_length = mb_strlen( text );
        


        jQuery( this ).after( '<p class="char-count"><span>' + ( limit - text_length ) + '</span> caracteres restantes</p>' );

        jQuery( this ).keyup( function() {
            if( jQuery( this ).is('textarea') )
                var text        = jQuery( this ).val();
            else {
                var text        = jQuery( this ).html();
            }
            var text_length = mb_strlen( text );

            if( text_length > limit )
            {
                jQuery( this ).siblings( '.char-count' ).find('span').html( '<strong style="color:#AE2020;">' + limit + '</strong>' );
                
                if( jQuery( this ).is('textarea') )
                    jQuery( this ).val( text.substr( 0, limit ) );
                else
                    jQuery( this ).html( text.substr( 0, limit ) );
                return false;
            }
            else
            {
                jQuery( this ).siblings( '.char-count' ).find('span').html( limit - text_length );

                return true;
            }
        } );
    } );
    });






});



    