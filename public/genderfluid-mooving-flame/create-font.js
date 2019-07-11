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


    