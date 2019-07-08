opentype.load('fonts/Baskervil_-Italic.otf ', function (err, font) {
    if (err) {
        alert('Could not load font: ' + err);
    } else {
        //define x y coordinates to position your text in the screen
        //define fontsize
        let y = 150;
        let x = 80;
        const fontSize = 100;

        //difine all the variable for the flame path
        let centreX = 30;
        let centreY = 39;
        let rayon = 50;
        let auteures = 20;
        let inclinaison = 10;
        let curvature = 10;
        let tangente = rayon * 0.6;
        let glyphsArray = [];

        // retrieve ligatures glyphs in the glyphs font arraay f
        const glyphEE = font.glyphs.glyphs[504];
        const glyphTES = font.glyphs.glyphs[507];

        //opentype function to create Array of glyphs objects from a string 
        let message = document.getElementById("message")
        message.addEventListener("change", (event) => {
            event.preventDefault()
            console.log(message.value)
            glyphsArray = font.stringToGlyphs('Hellees, World!');
        })
     

        // LOOP over Array of glyphs 
        glyphsArray.forEach((glyph, index) => {
            // For each glyph in the array check if it's a 'ee' ligature, 
            if (glyph.name === "e" && glyphsArray[index + 1].name === "e") {
                //Remove the two followings "e" glyphs 
                glyphsArray.splice(index + 1, 1);
                // Replace it(insert with index) with the ligature
                glyphsArray[index] = glyphEE;
            }

            if (glyph.name === "t" && glyphsArray[index + 1].name === "e" && glyphsArray[index + 2].name === "s") {
                glyphsArray.splice(index + 1, 1);
                glyphsArray.splice(index + 2, 1);
                glyphsArray[index] = glyphTES;
            }

        });


        // record everytime there's a new mouse movement and trigger the callback function with the new event object passed as parameter
        document.addEventListener("mousemove", (event) => {

            //Erase the content of html element with .glyph class /(replace it by empty string)
            document.querySelector(".glyph").innerHTML = " ";
            //Reassign x coordinate for position to the initial value
            x = 10;
            //reassign (update) the value of inclinaison variable with new x coordinates of the mouse position taken from event object
            //only reassign inclinaison value every 250 milliseconds using setTimeout function
            setTimeout(function () {
                if (event.clientX < 0) {
                    inclinaison = (event.clientX * 0.05)
                } else if (inclinaison >= 0) {
                    inclinaison = (event.clientX * 0.05)
                }
            }, 250);

            //Loop on glyphs array and do something with each element (glyph) 
            glyphsArray.forEach((glyph) => {
                //Check if the glyph element is not a 'ee' ligature using the name key value inside glyph object
                //if the glyph is not a ligature transform path of the glyph into an svg and insert it in the html element with the .glyph class
                if (glyph.name !== "e_e") {
                    const pathGlyph = glyph.getPath(x, y, fontSize)
                    const pathSvg = pathGlyph.toSVG()
                    const svgGlyph = document.querySelector(".glyph")
                    svgGlyph.insertAdjacentHTML("afterbegin", pathSvg)
                } else {
                    //define center of the flame proportionally to the glyph coordonates
                    centreY = y - y * 0.3;
                    centreX = x + x * 0.07;

                    const pathGlyphFlame = glyph.getPath(x, y, fontSize);
                    //Retrieve the command object into the path to add the flame drawing
                    const arrayCommands = pathGlyphFlame.commands;
                    // add every flame points objects into the array of commands , at the end of it, with the .push() function, 
                    arrayCommands.push({
                        type: "M",
                        x: centreX - inclinaison,
                        y: centreY - auteures

                    })
                    arrayCommands.push({
                        type: "C",
                        x1: centreX - inclinaison + curvature,
                        y1: centreY - auteures + curvature * 2,
                        x2: centreX - rayon,
                        y2: centreY - tangente,
                        x: centreX - rayon,
                        y: centreY
                    })

                    arrayCommands.push({
                        type: "C",
                        x1: centreX - rayon,
                        y1: centreY + tangente,
                        x2: centreX - tangente,
                        y2: centreY + rayon,
                        x: centreX,
                        y: centreY + rayon
                    })
                    arrayCommands.push({
                        type: "C",
                        x1: centreX + tangente,
                        y1: centreY + rayon,
                        x2: centreX + rayon,
                        y2: centreY + tangente,
                        x: centreX + rayon,
                        y: centreY
                    })
                    arrayCommands.push({
                        type: "C",
                        x1: centreX + rayon,
                        y1: centreY - tangente,
                        x2: centreX - inclinaison + curvature * 2,
                        y2: centreY - auteures + curvature,
                        x: centreX - inclinaison,
                        y: centreY - auteures
                    })

                    arrayCommands.push({
                        type: "Z"
                    })

                    //transform the new Commands array with the flame into svg and insert it in the html
                    const pathSvgFlame = pathGlyphFlame.toSVG();
                    const svgGlyphFlame = document.querySelector(".glyph");
                    svgGlyphFlame.insertAdjacentHTML("afterbegin", pathSvgFlame)
                };
                // Increment x variable every time a glyph is render to do the kerning 
                x += 80;

            });

            //CREATE NEW FONT AND DOWNLOAD IT

            // const fontNew = new opentype.Font({
            //     familyName: 'Baskervil_-Italic',
            //     styleName: 'Medium',
            //     unitsPerEm: 1000,
            //     ascender: 800,
            //     descender: -200,
            //     glyphs: glyphsArray
            // });


            // fontNew.download();
        })


    }
});