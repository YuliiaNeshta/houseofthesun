$(document).ready(function(){
	$('.slider').slick({//==Обращаемся к слайдеру в HTML
		arrows:false,
		dots:false,
		adaptiveHeight:true,
		slidesToShow:1,
		speed:2000,
		// easing:'linear',
		infinite: true,
		initialSlide:0,
		autoplay: false,
		autoplaySpeed:2000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		draggable:true,
		swipe:true,
		touchThreshold:5,
		touchMove:true,
		waitForAnimate:true,
		centerMode:true,
		variableWidth:true,
		focusOnSelect: true,
		useTransform: true,
		responsive: [
    			{
      	breakpoint: 425,
     		settings: {
        	slidesToShow: 1,
        	slidesToScroll: 1,
        	infinite: true,
        	dots: true
     	}
    	}]
	});
});



$(document).ready(function(){
	$('.slider__reviews').slick({//==Обращаемся к слайдеру в HTML
		arrows:true,//Выключени стрелки
		dots:true,//Включает точки
		adaptiveHeight:true,//Включает разную висоту слайдам
		slidesToShow:1,//Количество слайдов
		slidesToScroll:1,//Количество слайдов пролистуемо за одно нажатие
		speed:1000,//Скорость пролистования слайдов
		easing:'linear',// Анимация появления слайдов
		infinite:true,// Разрешает бесконечную прокрутку слайдов
		initialSlide:0,//Указует с какого слайда начинать просмотр
		autoplay:false,//Автоматическое проигривание слайдов
		autoplaySpeed:3000,//Время проигривания слайдов
		pauseOnFocus:true,//Остановка слайдера при фокусе на слайд
		pauseOnHover:true,//Остановка слайдера при наведении на слайд
		pauseOnDotsHover:true,//Остановка слайдера при наведении на точку слайда
		draggable:true,//Отключает перемотку слайдов мишкой
		swipe:true,//Отключает перемотку слайдов на сенсорах
		touchThreshold:5,//Длинна свайпа для перемотки слайдов
		touchMove:true,//false Включает или отключает возможности свайпа
		waitForAnimate:true,//false Виключает или отключает возможность по клику листать слайди
		centerMode:false,//true Виравнивает слайди по центру
		variableWidth:false,// true При включении сам контент определяет ширину
		rows:1,//Количество етажей слайдера
	});
});
