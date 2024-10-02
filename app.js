
function build(event) {

    event.preventDefault();
    // Gather input values
    let name1 = document.getElementById("fullName").value;
    let contact = document.getElementById("Contact").value;
    let mail = document.getElementById("mail").value;
    let link = document.getElementById("link").value;
    let town = document.getElementById("town").value;
    let obj = document.getElementById("obj").value;
    let skill1 = document.getElementById("skill1").value;
    let skill2 = document.getElementById("skill2").value;
    let skill3 = document.getElementById("skill3").value;
    let skill4 = document.getElementById("skill4").value;
  
    let place1 = document.getElementById("pl1").value;
    let rol1 = document.getElementById("rol1").value;
    let time1 = document.getElementById("tm1").value;
  
    let place2 = document.getElementById("pl2").value;
    let rol2 = document.getElementById("rol2").value;
    let time2 = document.getElementById("tm2").value;
  
    let place3 = document.getElementById("pl3").value;
    let rol3 = document.getElementById("rol3").value;
    let time3 = document.getElementById("tm3").value;
  
    let colname = document.getElementById("colname").value;
    let coltime = document.getElementById("collegetm").value;
  
    let uniname = document.getElementById("uniname").value;
    let subj = document.getElementById("subj").value;
    let unitime = document.getElementById("unitm").value;
  
    let course1 = document.getElementById("course1").value;
    let course2 = document.getElementById("course2").value;
    let coursepl1 = document.getElementById("coursepl1").value;
    let coursepl2 = document.getElementById("coursepl2").value;
  
  
  
    // Set values on the resume page after redirection
    document.getElementById("name").innerHTML = name1;
    document.getElementById("number").innerHTML = contact;
    document.getElementById("email").innerHTML = mail;
    document.getElementById("linkedin").innerHTML = link;
    document.getElementById("city").innerHTML = town;

    if(obj === ""){
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat illo qui quisquam quas nobis provident voluptate distinctio! Inventore reiciendis earum praesentium similique? Animi adipisci beatae soluta facilis quia fugit, cupiditate maiores provident. Vero harum velit voluptates iusto voluptatum ab!."
    }
    else{
        document.getElementById("objective").innerHTML = obj;
    }
    
    document.getElementById("sk1").innerHTML = skill1;
    document.getElementById("sk2").innerHTML = skill2;
    document.getElementById("sk3").innerHTML = skill3;
    document.getElementById("sk4").innerHTML = skill4;
    document.getElementById("place1").innerHTML = place1;
    document.getElementById("place2").innerHTML = place2;
    document.getElementById("place3").innerHTML = place3;
    document.getElementById("role1").innerHTML = rol1;
    document.getElementById("role2").innerHTML = rol2;
    document.getElementById("role3").innerHTML = rol3;
    document.getElementById("time1").innerHTML = time1;
    document.getElementById("time2").innerHTML = time2;
    document.getElementById("time3").innerHTML = time3;
    document.getElementById("college").innerHTML = colname;
    document.getElementById("coltime").innerHTML = coltime;
    document.getElementById("subject").innerHTML = subj;
    document.getElementById("uni").innerHTML = uniname;
    document.getElementById("unitime").innerHTML = unitime;
    document.getElementById("cert1").innerHTML = course1;
    document.getElementById("cert2").innerHTML = course2;
    document.getElementById("certorg1").innerHTML = coursepl1;
    document.getElementById("certorg2").innerHTML = coursepl2;

     // Hide the form and show the resume
     document.getElementById("form").style.display = "none";
     document.getElementById("resume").style.display = "block";



     document.getElementById('download').addEventListener('click', function () {
        const resumeElement = document.getElementById('resume'); // ID of your resume section
        html2pdf()
            .from(resumeElement)
            .save('resume.pdf'); // Name of the downloaded file
    });
    
  }
  