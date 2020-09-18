function topLeft(){
    var topLeft = document.getElementById('top-left').value
    if(topLeft ===''){
        topLeft = 0
        document.querySelector('#border-top-left').style.display = 'none'
    }else{ document.querySelector('#border-top-left').style.display = 'flex' }
    
    document.querySelector('.box').style.borderTopLeftRadius = topLeft + "px"
    document.querySelector('#border-top-left').innerHTML = `border-top-left-radius: ${topLeft}px`
 
}
function topRight(){
    var topRight = document.getElementById('top-right').value
    if(topRight ===''){
        topRight = 0
        document.querySelector('#border-top-right').style.display = 'none'
    }else{ document.querySelector('#border-top-right').style.display = 'flex' }
    document.querySelector('.box').style.borderTopRightRadius = topRight + "px"
    document.querySelector('#border-top-right').innerHTML = `border-top-right-radius: ${topRight}px`
}

function bottomLeft(){
    var bottomLeft = document.getElementById('bottom-left').value
    if(bottomLeft ===''){
        bottomLeft = 0
        document.querySelector('#border-bottom-left').style.display = 'none'
    }else{ document.querySelector('#border-bottom-left').style.display = 'flex' }
    document.querySelector('.box').style.borderBottomLeftRadius = bottomLeft + "px"
    document.querySelector('#border-bottom-left').innerHTML = `border-bottom-left-radius: ${bottomLeft}px`
}

function bottomRight(){
    var bottomRight = document.getElementById('bottom-right').value
    if(bottomRight ===''){
        bottomRight = 0
        document.querySelector('#border-bottom-right').style.display = 'none'
    }else{ document.querySelector('#border-bottom-right').style.display = 'flex' }
    document.querySelector('.box').style.borderBottomRightRadius = bottomRight + "px"
    document.querySelector('#border-bottom-right').innerHTML = `border-bottom-right-radius: ${bottomRight}px`
}

function Vazio(valor){
    if(valor ===''){
        valor = 0
    }
}
 setInterval(function(){
     topLeft();
     topRight()
     bottomLeft()
     bottomRight()
 },300)


