function display(Balls) {
    for (var k = 0; k < Balls.length; k++) {
        Ball = Balls[k];
        var div = $('<div/>', {
            'class': 'color',
            'ID': Ball.ID
        })
        div.css("background-color", Ball.color);

        $("div.data").append(div);
    }
}

function pad(text, length) {
    while (text.length < length) {
        text += "`";
        //console.log(text);
    }

    return text;
}
