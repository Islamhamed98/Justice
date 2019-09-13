$(document).ready(function() {

    "use strict";

    "use strict";
    // Start Justice Code 
    var myLang = { 
        'en' : { 
            'conv-eng':'English',
            'conv-ar':'Arabic',
            'Justice' : 'Justice',
            'Team' : 'Team',
            'About' : 'About',
            'White' : 'White Paper',
            'Media' : 'Media',
            'Contact': 'Contact Us',
            'Register': 'Sign Up',
            'get-start':'Get Started',
            'cryptocurrency-market':'Cryptocurrency Exchange Market',
            'cryptocurrency-brought':'Cryptocurrency brought to the next level. Join our ICO for supercharged rates.',
            'Buy': 'Buy Tokens 20% off',
            'Accept':'WE ACCEPT',
            'chain':'Chaining',
            'Supercharged':'Supercharged features to make you happy and lorem ipsum sit dolor amet',
            'stacking':'Stacking',
            'managing':'Managing',
            'Decentralized':'Decentralized Exchange',
            'Viderer':'Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.', 
            'token-building':'Token-Buildings',
            'token-building-exp':'Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.',
            'token-building-learn':'Learn More',
            'cascading-blockchain':'Cascading Blockchain',
            'cascading-blockchain-exp':'Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.',
            'block-white':'WHITEPAPER',
            'crypto-farming':'Crypto Farming',
            'crypto-farming-exp': 'Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.',
            'join-btn':'JOIN THE ICO',
            'join-our-now':'Join our ICO Now',
            'join-our-now-exp':'Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.',
            'roadmap':'Our 2018 Roadmap',
            'roadmap-exp':'Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis    mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.',
            'platform':'Platform Launch',
            'platform-exp':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.',
            'platform-jan':'January 16th, 2018',
            'live-tracking':'Live Tracking',
            'live-trackings-exp': 'Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit.     Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei     tota homero.',
            'track':'Track everything with the App',
            'track-exp':'Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis      mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.',
            'track-btn':'DOWNLOAD APP',
            'our-team':'Our Team',
            'our-team-exp':'Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.',
            'advisors':'Advisors',
            'advisors-exp':'Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.',
            'first-card':'John Cambell',
            'second-card':'Lucy Wong',
            'th-card' : 'Joshua Stevens',
            'four-card' : 'Sara Jackson',
            'five-card':'Mike Kovalsky',
            'six-card':'Sandra Bernard',
            'faq':'FAQ',
            'faq-exp':'Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.',
            'what-blockchain':'What is Blockchain ?',
            'what-blockchain-exp':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'faq-ICO':'What is ICO ?',
            'faq-paper':'Where to get the Whitepaper ?',
            'faq-innovation':'What is Krypton Core Innovation ?',
            'faq-platform':'When will be the platform released ?',
            'faq-tokens':'How much tokens will be sold ?',
            'faq-soft':'What happens if Soft Cap isn\'t reached ?',
            'faq-raise':'How much do you want to raise with the ICO ?',
            'faq-distribute':'When will the tokens be distributed ?',
            'faq-bounties':'Will their be Bounties ?',
            'media-partners':'Media & Partners',
            'media-partners-exp':'Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.',
            'block-dummies':'Blockchain for dummies',
            'block-dummies-date':'15.04.2018',
            'block-dummies-exp':'Lorem Ipsum, dizgi ve baski endüstrisinde kullanilan migir metinlerdir. Lorem Ipsum, adibilinmeyen bir matbaacinin bir hurufat numune kitabi...',
            'block-auther':'by joshua Stevens',
            'block-btn':'MORE ARTICLES',
            'get-touch':'Get in Touch',
            'get-touch-exp':'Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.',
            'username':'Name',
            'email':'Email',
            'message':'Message',
            'send-message':'SEND MESSAGE', 
            'krypton-logo':'KRYPTON',
            'krypton-exp':'Blockchain brought to another level',
            'kr-token':'TOKEN',
            'kr-ICO':'ICO',
            'kr-Register':'REGISTER',
            'kr-Media':'MEDIA',
            'kr-Roadmap':'ROADMAP',
            'kr-Telegram':'TELEGRAM',
            'subscribe-btn':'SUBSCRIPBE',
            'kr-copyright':'© 2018 | Krypton. All Rights Reserved',
            'codedby':'Designed and Coded by Css Ninja',
        },
        'ar' : {
            'conv-eng':'انجليزي',
            'conv-ar':'عربي',
            'Justice' : 'Justice',
            'Team' : 'الفريق',
            'About' : 'عن الموقع',
            'White' : 'الورقا البيضاء',
            'Media' : 'ميديا',
            'Contact': 'تواصل معنا',
            'Register':'سجل الأن',
            'get-start':'هيا نبدا',
            'cryptocurrency-market':'سوق العملات المشفرة',
            'cryptocurrency-brought':'جلبت العمله المشفره الي المستوي التالي.انضم لنا لمعرفة اسعار الشحن المفرطه.',
            'Buy': 'اشتري %20 من',
            'Accept':'نحن نوافق',
            'chain':'التسلسل',
            'Supercharged':'ميزات الشحن السريع لكي تجعلك سعيدا ومثاليا',
            'stacking':'التراص',
            'managing':'الأداره',
            'Decentralized':'تغيير اللامركزيه',
            'Viderer':'خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي',
            'token-building':'المباني المأخوذه',
            'token-building-exp':'خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي.',
            'token-building-learn':'تعلم المزيد',             
            'cascading-blockchain':'سلسلة البلوكات المتتاليه',
            'cascading-blockchain-exp':'خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي.',
            
            'block-white':'الورقا البيضاء',
            'crypto-farming': 'تشفير الزراعه',
            'crypto-farming-exp': 'خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي.',
            'join-btn':'التحق بنا',
            'join-our-now':'التحق بنا الان',
            'join-our-now-exp':'خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي.',
            'roadmap':'خريطة الطريق 2020',
            'roadmap-exp':'خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي',
            'platform':'منصة الانطلاق',
            'platform-exp':'خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جويخسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي',
            'platform-jan':'١٦ يناير ٢٠١٨',
            'live-tracking':'تراك السيستم',
            'live-trackings-exp':'خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جويخسائ',
            'track':'افعل كل شيء مع التطبيق',
            'track-exp':'خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جويخسائ',
            'track-btn':'حمل التطبيق',
            'our-team':'فريقنا',
            'our-team-exp':'خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جويخسائ',
            'advisors':'المرشدين',
            'advisors-exp':'خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جويخسائ',
            'first-card':'لؤي عبد السلام',
            'second-card':'محمد عادل',
            'th-card' : 'اسلام حامد',
            'four-card' : 'ياسمين صبري',
            'five-card':'مصطفي طارق',
            'six-card':'ساره سلامه',
            'faq':'اساله شائعه',
            'faq-exp':'خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جويخسائ',
            'what-blockchain':'ماهو البلوك تشين ؟',
            'what-blockchain-exp':'خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جويخسائ',
            'faq-ICO':'ما هو المدير ؟',
            'faq-paper':'من اين احصل علي الورقا البيضاء',
            'faq-innovation':'ما هو اختراع العمله المشفره ؟',
            'faq-platform':'متي يتم انطلاق المنصه ؟',
            'faq-tokens':'كم عدد المشتريات المباعه ؟',
            'faq-soft':'ماذا حدث لو لم يصل السوفت كاب ؟',
            'faq-raise':'الي اي مدي تريد ان تصل مع المدير التنفيذي ؟',
            'faq-distribute':'متي المشتريات سوف يتم توزيعها ؟',
            'faq-bounties':'هل هناك حوافز ؟',
            'media-partners':'ميديا & الشركاء',
            'media-partners-exp':'خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جويخسائ',
            'get-touch':'تواصل معنا',
            'get-touch-exp':'خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جويخسائ',
            'block-dummies':'سلسلة البلوكات المتتاليه',
            'block-dummies-date':'٣٢.٢٠١٨',
            'block-dummies-exp':'خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام,',
            'block-auther':'اسلام حامد',
            'block-btn':'اقرا مقالاتنا',
            'username':'الاسم',
            'email':'البريد الالكتروني',
            'message':'الرساله',
            'krypton-logo':'التشفير',
            'krypton-exp':'البلوك تشين لتحقيق العداله',
            'kr-token':'المشتريات',
            'kr-ICO':'المدير',
            'kr-Register':'التسجيل',
            'kr-Roadmap':'الخريطه',
            'kr-Media':'ميديا',
            'kr-Telegram':'برقيه',
            'subscribe-btn':'اشترك الأن',
            'kr-copyright':'©جميع الحقوق محفوظه للعداله ٢٠١٨',
            'codedby':'تم التصميم بواسطة العداله',
            'ninja':'العداله',
            'send-message':'ارسل الرساله',
         

        },
    }; 
    $('.translate').click(function(){
        var lang = $(this).attr('id');
        if(lang == "ar") {
            $("#mylink").attr("href","assets/css/style-arbic.css");
        } else { 
            $("#mylink").attr("href","assets/css/test.css");
        }
        $('.lang').each(function(index,element) {
            $(this).text( myLang[lang][$(this).attr('key')]);
        });
    });

    console.log($("#mylink").attr("href"));
    // $("#linkId").attr("href", "http://the.new.url");    

    // End Justice Code 


 

    //Page loader
    if ($('.pageloader').length) {

        $('.pageloader').toggleClass('is-active');

        $(window).on('load', function() {
            var pageloaderTimeout = setTimeout( function() {
                $('.pageloader').toggleClass('is-active');
                $('.infraloader').toggleClass('is-active')
                clearTimeout( pageloaderTimeout );
            }, 700 );
        })
    }

    //Navbar Clone
    if ($('#navbar-clone').length) {
        $(window).scroll(function() {    // this will work when your window scrolled.
            var height = $(window).scrollTop();  //getting the scrolling height of window
            if(height  > 50) {
                $("#navbar-clone").addClass('is-active');
            } else{
                $("#navbar-clone").removeClass('is-active');
            }
        });
    }

    //Mobile menu toggle
    if ($('.navbar-burger').length) {
        $('.navbar-burger').on("click", function(){

            var menu_id = $(this).attr('data-target');
            $(this).toggleClass('is-active');
            $("#"+menu_id).toggleClass('is-active');
            $('.navbar.is-light').toggleClass('is-dark-mobile')

            /*if ($('.navbar-menu').hasClass('is-active')) {
                $('.navbar-menu').removeClass('is-active');
                $('.navbar').removeClass('is-dark-mobile');
            } else {
                $('.navbar-menu').addClass('is-active');
                $('.navbar').addClass('is-dark-mobile');
            }*/
        });
    }
    
    //Highlight current page navbar menu item
    if ($('.navbar').length) {
        // Get current page URL
        var url = window.location.href;

        // remove # from URL
        url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));

        // remove parameters from URL
        url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));

        // select file name
        url = url.substr(url.lastIndexOf("/") + 1);

        // If file name not available
        if(url == ''){
            url = 'index.html';
        }

        // Loop all menu items
        $('.navbar .navbar-item a').each(function(){

            // select href
            var href = $(this).attr('href');

            // Check filename
            if(url == href){

                // Add active class
                $(this).addClass('is-active');
            }
        });
    }

    //Pop Dropdowns
    $('.dropdown-trigger').on('click', function(event) {
        event.stopPropagation();
        $('.dropdown').removeClass('is-active');
        $(this).closest('.dropdown').addClass('is-active');
    })
    //Close pop dropdowns on click outside
    $(window).on('click', function(event) {
        //if(!$(event.target).find('.dropdown-menu').length) {
        if($('.dropdown').hasClass('is-active')) {
            $('.dropdown').removeClass('is-active');
        }
        //} 
    });

    //Navigation Tabs
    $('.flying-tabs .flying-child').on('click', function() {
        var tab_id = $(this).attr('data-tab');

        $(this).siblings('.flying-child').removeClass('is-active');
        $(this).closest('.flying-wrapper').find('.flying-tabs-content').children('.tab-content').removeClass('is-active');

        $(this).addClass('is-active');
        $("#"+tab_id).addClass('is-active');
    })

    //Modal video

    new ModalVideo('.js-modal-btn', {
        channel: 'youtube',
        autoplay: 1
    });

    //Icons
    feather.replace();

    //Fix for portrait tabs flex display
    if (window.matchMedia('(min-width: 768px)').matches) {
        $('.tab-content-wrapper').addClass('is-flex-mobile');
    } else {
        $('.tab-content-wrapper').removeClass('is-flex-mobile');
    }

    $(window).on('resize', function() {
        if (window.matchMedia('(min-width: 768px)').matches) {
            $('.tab-content-wrapper').addClass('is-flex-mobile');
        } else {
            $('.tab-content-wrapper').removeClass('is-flex-mobile');
        }
    })

    //Aos
    AOS.init();

    //Documentation languages toggle
    if ($('.token-documentation').length) {
        $('.token-documentation ul li').on('click', function(){
            $('.token-documentation ul li.is-active').removeClass('is-active');
            $(this).addClass('is-active');
        })
    }

    //Anchor scroll
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .on('click', function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 550, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    $('.like-button').on('click', function(){
        $(this).toggleClass('is-active');
        $('.like-button svg').toggleClass('gelatine');
    })

    /* ---- particles.js config ---- */

    if($('#particles-js'). length) {

        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area":1000
                    }
                },
                "color": {
                    "value": ["#5507fc"]
                },

                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 5,
                        "color": "#5507fc"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 120,
                    "color": "#5507fc",
                    "opacity": 0.2,
                    "width": 1.6
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "top",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

    }

})