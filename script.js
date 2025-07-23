function getgrade(){

    //parseFloat is used to convert the string to numbers
    const tamil=Number(document.getElementById("tamil").value)
    const english=Number(document.getElementById("english").value)
    const mathematics=Number(document.getElementById("mathematics").value)
    const science=Number(document.getElementById("science").value)
    const socialscience=Number(document.getElementById("socialscience").value)

    //Check if the input is valid or not
    if (
        isNaN(tamil) || isNaN(english) || isNaN(mathematics) ||
        isNaN(science) || isNaN(socialscience)
    ) {
        document.getElementById("total").innerHTML = "<span style='color:red;'>Please the marks correctly</span>";//Warning if not marks entered
        return;
    }

    //calculate total & average
    const total=tamil+english+mathematics+science+socialscience
    const avg=total/5;

    let grade=""
    if(avg>95 && avg<=100)
    {
        grade="A"
    }
    else if(avg>85 && avg<=95)
    {
        grade="B"
    }
    else if(avg>75 && avg<=85)
    {
        grade="C"
    }
    else if(avg>65 && avg<=75)
    {
        grade="D"
    }
    else if(avg>=50 && avg<=65)
    {
        grade="E"
    }
    else
    {
        grade="Fail"
    }

    //print total & grade
    document.getElementById("total").innerHTML="TOTAL: "+total;
    document.getElementById("avg").innerHTML="AVG: "+avg;
    document.getElementById("grade").innerHTML="GRADE: "+grade;

}