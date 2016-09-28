var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});

		
	
	var scene_1_animation = new TimelineMax({})
	scene_1_animation.to("#helloStatement", 0.5, { scale:1, opacity: 1, delay:3})

					
	
	//panel 1 intro
	var scene_1 = new ScrollMagic.Scene({
									triggerElement: "#trigger_1",
									duration: 500
								})
								.setPin('#helloStatement')
								.setTween(scene_1_animation) // trigger a TweenMax.to tween
								// .addIndicators({name: "scene_1 (duration: 500)"}) add indicators (requires plugin)
								
								.addTo(controller);
//panel 2 intro
	var scene_2 = new ScrollMagic.Scene({
									triggerElement: "#trigger_2",
									duration: 500
								})
								.setPin('#section_2_content')
								.setTween("#section_2_content", 0.5, { opacity: 1}) // trigger a TweenMax.to tween
								// .addIndicators({name: "scene_2 (duration: 500)"}) // add indicators (requires plugin)
								
								.addTo(controller);
//panel 3 intro
	var scene_3 = new ScrollMagic.Scene({
									triggerElement: "#trigger_3",
									duration: 500
								})
								.setPin('#object_3_content')
								.setTween("#object_3_content", 0.5, { opacity: 1}) // trigger a TweenMax.to tween
								// .addIndicators({name: "scene_2 (duration: 500)"}) // add indicators (requires plugin)
								
								.addTo(controller);

//panel 4 intro (I Design)
	var scene_4 = new ScrollMagic.Scene({
									triggerElement: "#trigger_4",
									duration: 500
								})
								.setPin('#object_4_content')
								.setTween("#object_4_content", 0.5, {opacity: 1}) // trigger a TweenMax.to tween
								// .addIndicators({name: "scene_2 (duration: 500)"}) // add indicators (requires plugin)
								
								.addTo(controller);
//panel 5 intro (I Design)
	var design_graph_intro = new TimelineMax();
		design_graph_intro.to("#object_5_content", 0.5, { opacity:1})
						  .to("#ps rect", .25, {fill:130,opacity:1})
						  .to("#ai rect", .25, {fill:400, opacity:1})
						  .to("#id rect", .25, {fill:40, opacity:1})
						  .to("#ae rect", .25, {fill:23, opacity:1})
						  .to("#fl rect", .25, {fill:23, opacity:1})
						  .to("#dw rect", .25, {fill:23, opacity:1})
						  
						  
	var scene_5 = new ScrollMagic.Scene({
									triggerElement: "#trigger_5",
									duration: 500
								})
								.setPin('#object_5_content')
								.setTween(design_graph_intro) // trigger a TweenMax.to tween
								// .addIndicators({name: "scene_2 (duration: 500)"}) // add indicators (requires plugin)
								
								.addTo(controller);
//panel 6 intro (I Design)
var scene_6_animation = new TimelineMax();
	scene_6_animation.to("#object_6_content", 0.5, {opacity:1});
var scene_6 = new ScrollMagic.Scene({
									triggerElement: "#trigger_6",
									duration: 500
								})
								.setPin('#object_6_content')
								.setTween(scene_6_animation) // trigger a TweenMax.to tween
								// .addIndicators({name: "scene_2 (duration: 500)"}) // add indicators (requires plugin)
								
								.addTo(controller);
//panel 7 intro (I Design)
var scene_7_animation = new TimelineMax();
	scene_7_animation.to("#object_7_content", 0.5, {opacity:1})
					 .to("#photoshop_x5F_bar_7_", 0.5, {width:380, opacity:1} , "label_1")
					 .to("#photoshop_x5F_bar_8_", 0.25, {width:510, opacity:1} , "label_1")
					 .to("#photoshop_x5F_bar_9_", 0.25, {width:540, opacity:1} , "label_1")
					 .to("#photoshop_x5F_bar_10_", 0.25, {width:460, opacity:1} , "label_1")
					 .to("#photoshop_x5F_bar_11_", 0.25, {width:480, opacity:1} , "label_1")
					 .to("#photoshop_x5F_bar_12_", 0.25, {width:520, opacity:1} , "label_1")

var scene_7 = new ScrollMagic.Scene({
									triggerElement: "#trigger_7",
									duration: 500
								})
								.setPin('#object_7_content')
								.setTween(scene_7_animation) // trigger a TweenMax.to tween
								//.addIndicators({name: "scene_2 (duration: 500)"}) // add indicators (requires plugin)
								
								.addTo(controller);
var scene_8_animation = new TimelineMax();
	scene_8_animation.to("#object_8_content", 0.5, {opacity:.95})
var scene_8 = new ScrollMagic.Scene({
									triggerElement: "#trigger_8",
									duration: 500
								})
								.setPin('#object_8_content')
								.setTween(scene_8_animation) // trigger a TweenMax.to tween
								//.addIndicators({name: "scene_2 (duration: 500)"}) // add indicators (requires plugin)
								
								.addTo(controller);
	














