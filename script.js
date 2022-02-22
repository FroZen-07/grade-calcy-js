const calcy = () =>{
    let wd = document.getElementById('wd').value
    let maths = document.getElementById('maths').value
    let comp = document.getElementById('comp').value
    let phy = document.getElementById('phy').value
    let grade = ""

    let totalGrade = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy)
    
    let perc = ((totalGrade)/400) * 100


    if(perc <= 100 && perc >= 80){
        grade = 'A'
    }else if (perc <= 79 && perc >= 60) {
        grade = 'B'
    }else if (perc <= 59 && perc >= 40) {
        grade = 'C'
    }else {
        grade = 'F'
    }

    if(perc < 40){
        document.getElementById('showData').innerHTML = `Out of 400 your total is ${totalGrade} and percentage is ${perc}%. <br> Your Grade is ${grade}. You are fail`
    }else {
        document.getElementById('showData').innerHTML = `Out of 400 your total is ${totalGrade} and percentage is ${perc}%. <br> Your Grade is ${grade}. You are pass`
    }

}
  