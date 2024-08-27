function locomotive() 
{
	gsap.registerPlugin(ScrollTrigger);

	const locoScroll = new LocomotiveScroll({
		el: document.querySelector(".main"),
		smooth: true ,
	});
	locoScroll.on("scroll", ScrollTrigger.update);

	ScrollTrigger.scrollerProxy(".main", 
	{
		scrollTop(value) {
			return arguments.length
				? locoScroll.scrollTo(value, 0, 0)
				: locoScroll.scroll.instance.scroll.y;
		},

		getBoundingClientRect() {
			return {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight,
						};
		},

		pinType: document.querySelector(".main").style.transform
			? "transform"
			: "fixed",
	});
	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
	ScrollTrigger.refresh();
}

locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) 
{
	
	var data = ``;

	// images/RunFromSide60FPS
	for (let index = 0; index <= 42; index++) 
	{
		if (index < 10) 
			{data += `./images/RunFromSide60FPS/RunFromSide0` + index + `.png\n`;}
		else if (index < 100)
			{data += `./images/RunFromSide60FPS/RunFromSide` + index + `.png\n`;}
	}
	// images/RunLeft60FPS
	for (let index = 5; index <= 42; index++) 
	{
		if (index < 10) 
			{data += `./images/RunLeft60FPS/RunLeft0` + index + `.png\n`;}
		else if (index < 100)
			{data += `./images/RunLeft60FPS/RunLeft` + index + `.png\n`;}
	}
	// images/RunTransitionLeftToBackLeftToBack0FPS
	for (let index = 5 index <= 42; index++) 
	{
		if (index < 10) 
			{data += `./images/RunTransitionLeftToBack60FPS/RunTransitionLeftToBack0` + index + `.png\n`;}
		else if (index < 100)
			{data += `./images/RunTransitionLeftToBack60FPS/RunTransitionLeftToBack` + index + `.png\n`;}
	}
	// images/RunBack60FPS
	for (let index = 5; index <= 42; index++) 
	{
		if (index < 10) 
			{data += `./images/RunBack60FPS/RunBack0` + index + `.png\n`;}
		else if (index < 100)
			{data += `./images/RunBack60FPS/RunBack` + index + `.png\n`;}		
	} 
	// images/RunTransitionBackToRight60FPS
	for (let index = 5; index <= 42; index++) 
	{
		if (index < 10) 
			{data += `./images/RunTransitionBackToRight60FPS/RunTransitionBackToRight0` + index + `.png\n`;}
		else if (index < 100)
			{data += `./images/RunTransitionBackToRight60FPS/RunTransitionBackToRight` + index + `.png\n`;}
	}
	// images/RunRight60FPS
	for (let index = 5; index <= 42; index++) 
	{
		if (index < 10) 
			{data += `./images/RunRight60FPS/RunRight0` + index + `.png\n`;}
		else if (index < 100)
			{data += `./images/RunRight60FPS/RunRight` + index + `.png\n`;}
	}
	// images/RunTransitionRightToFront60FPS
	for (let index = 5; index <= 42; index++) 
	{
		if (index < 10) 
			{data += `./images/RunTransitionRightToFront60FPS/RunTransitionRightToFront0` + index + `.png\n`;}
		else if (index < 100)
			{data += `./images/RunTransitionRightToFront60FPS/RunTransitionRightToFront` + index + `.png\n`;}
	}
	// images/RunFront60FPS
	for (let index = 5; index <= 42; index++) 
	{
		if (index < 10) 
			{data += `./images/RunFront60FPS/RunFront0` + index + `.png\n`;}
		else if (index < 100)
			{data += `./images/RunFront60FPS/RunFront` + index + `.png\n`;}
	}
	// images/RunTransitionFrontToLeft60FPS
	for (let index = 5; index <= 42; index++) 
	{
		if (index < 10) 
			{data += `./images/RunTransitionFrontToLeft60FPS/RunTransitionFrontToLeft0` + index + `.png\n`;}
		else if (index < 100)
			{data += `./images/RunTransitionFrontToLeft60FPS/RunTransitionFrontToLeft` + index + `.png\n`;}
	}
	// images/RunTransitionLeftToBackLeftToBack0FPS ***
	for (let index = 5; index <= 42; index++) 
	{
		if (index < 10) 
			{data += `./images/RunTransitionLeftToBack60FPS/RunTransitionLeftToBack0` + index + `.png\n`;}
		else if (index < 100)
			{data += `./images/RunTransitionLeftToBack60FPS/RunTransitionLeftToBack` + index + `.png\n`;}
	}
	// images/RunTransitionBackToRight60FPS
	for (let index = 5; index <= 42; index++) 
	{
		if (index < 10) 
			{data += `./images/RunTransitionBackToRight60FPS/RunTransitionBackToRight0` + index + `.png\n`;}
		else if (index < 100)
			{data += `./images/RunTransitionBackToRight60FPS/RunTransitionBackToRight` + index + `.png\n`;}
	}
	// images/RunTransitionRightToFront60FPS
	for (let index = 5; index <= 42; index++) 
	{
		if (index < 10) 
			{data += `./images/RunTransitionRightToFront60FPS/RunTransitionRightToFront0` + index + `.png\n`;}
		else if (index < 100)
			{data += `./images/RunTransitionRightToFront60FPS/RunTransitionRightToFront` + index + `.png\n`;}
	}	
	// images/RunTransitionFrontToLeft60FPS
	for (let index = 5; index <= 42; index++) 
	{
		if (index < 10) 
			{data += `./images/RunTransitionFrontToLeft60FPS/RunTransitionFrontToLeft0` + index + `.png\n`;}
		else if (index < 100)
			{data += `./images/RunTransitionFrontToLeft60FPS/RunTransitionFrontToLeft` + index + `.png\n`;}
	}

	return data.split("\n")[index];
}

const frameCount = 499; // количество кадров !!!

const images = [];
const imageSeq = {
	frame: 1,
};

for (let i = 0; i < frameCount; i++) {
	const img = new Image();
	img.src = files(i);
	images.push(img);
}

gsap.to(imageSeq, {
		frame: frameCount - 1,
		snap: "frame",
		ease: `none`,
		scrollTrigger: {
		scrub: 0.15,
		trigger: `.page>canvas`,
		start: `top top`,
		end: `600% top`,
		scroller: `.main`,
		},
		onUpdate: render,
});

images[1].onload = render;

function render() {
	scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
	var canvas = ctx.canvas;
	var hRatio = canvas.width / img.width;
	var vRatio = canvas.height / img.height;
	var ratio = Math.max(hRatio, vRatio);
	var centerShift_x = (canvas.width - img.width * ratio) / 2;
	var centerShift_y = (canvas.height - img.height * ratio) / 2;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(
		img,
		0,
		0,
		img.width,
		img.height,
		centerShift_x,
		centerShift_y,
		img.width * ratio,
		img.height * ratio
	);
}

ScrollTrigger.create({
	trigger: ".page>canvas",
	pin: true,
	// markers:true,
	scroller: `.main`,
	start: `top top`,
	end: `600% top`,
});

gsap.to(".page1",{
	scrollTrigger:{
		trigger:`.page1`,
		start:`top top`,
		end:`bottom top`,
		pin:true,
		scroller:`.main`
	}
})

gsap.to(".page2",{
	scrollTrigger:{
		trigger:`.page2`,
		start:`top top`,
		end:`bottom top`,
		pin:true,
		scroller:`.main`
	}
})

gsap.to(".page3",{
	scrollTrigger:{
		trigger:`.page3`,
		start:`top top`,
		end:`bottom top`,
		pin:true,
		scroller:`.main`
}
})