		var file = "2.jpg";
		window.onload = function(e) {
			c = document.getElementById("imageView");
			ctx = c.getContext("2d");
			var img = new Image();
			img.src = file;
			img.onload = function() {
				c.width = img.width;
				c.height = img.height;
				ctx.drawImage(img, 0, 0);
			}
		}
		
		function rotate (angle) {
			var theta = angle * Math.PI / 180;
			var x, x1, y, y1, i, i1;
			
			var c = document.getElementById("imageView");
			var ctx = c.getContext("2d");
			var img = new Image();
			img.src = file;
			c.width = img.width;
			c.height = img.height;
			ctx.drawImage(img, 0, 0);
			var imageData = ctx.getImageData(0, 0, c.width, c.height);
			var w = img.width, h = img.height;
			var inData = imageData.data;
			var outData = new Uint8ClampedArray(inData.length);
			
			//var m = [[Math.cos(theta), -Math.sin(theta)], [Math.sin(theta), Math.cos(theta)]];
			var cx = w / 2, cy = h / 2;
			
			for (y = 0; y < h; y++) {
				for (x = 0; x < w; x++) {
					/*x1 = Math.floor(x * m[0][0] + y * m[0][1]);
					y1 = Math.floor(x * m[1][0] + y * m[1][1]);*/

					x1 =  Math.floor((x-cx)*Math.cos(theta) - (y-cy)*Math.sin(theta) + cx);
					y1 =  Math.floor((y-cy)*Math.cos(theta) + (x-cx)*Math.sin(theta) + cy);
					
					//x1 =  Math.floor((x-cx)*Math.cos(theta)) - Math.floor((y-cy)*Math.sin(theta) + cx));
					//y1 =  Math.floor((y-cy)*Math.cos(theta)) + Math.floor((x-cx)*Math.sin(theta) + cy);

					byteOffset = (x + y * w) * 4;
					calcOffset = (x1 + y1 * w) * 4;
					
					outData[calcOffset + 0] = inData[byteOffset + 0]; // red
					outData[calcOffset + 1] = inData[byteOffset + 1]; // green
					outData[calcOffset + 2] = inData[byteOffset + 2]; // blue
					outData[calcOffset + 3] = 255; // blue
				}
			}
			
			var imageData = new ImageData(outData, w, h);
			ctx.putImageData(imageData, 0, 0);
		}
