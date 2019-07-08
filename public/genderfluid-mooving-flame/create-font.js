    // Create and download font
    var notdefGlyph = new opentype.Glyph({
        name: '.notdef',
        unicode: 0,
        advanceWidth: 650,
        path: new opentype.Path()
    });

    var aPath = new opentype.Path();
    aPath.moveTo(100, 0);
    aPath.lineTo(100, 700);

    console.log("path", aPath)
    // more drawing instructions...
    var aGlyph = new opentype.Glyph({
        name: 'A',
        unicode: 65,
        advanceWidth: 650,
        path: aPath
    });

    var glyphs = [notdefGlyph, aGlyph];
    var font = new opentype.Font({
        familyName: 'OpenTypeSans',
        styleName: 'Medium',
        unitsPerEm: 1000,
        ascender: 800,
        descender: -200,
        glyphs: glyphs
    });


    font.download();


        // var path = font.getPath('Hello, World!', 0, 10, 20);
        // // path.draw(ctx);
        // font.draw(ctx, 'Hello, World!', 0, 10, 120)
        // If you just want to draw the text you can also use font.draw(ctx, text, x, y, fontSize).

        // let svg = path.toSVG()
        // console.log(svg)


        // var aPath = new opentype.Path();
        // aPath.moveTo(100, 0);
        // aPath.lineTo(100, 700);

        // var aGlyph = new opentype.Glyph({
        //     name: 'A',
        //     unicode: 65,
        //     advanceWidth: 650,
        //     path: aPath
        // });


        // console.log(font.glyphs.glyphs)
        //  let glyphs = font.stringToGlyphs('hello')
        //  const h = glyphs[0].advanceWidth
        //  console.log(h)