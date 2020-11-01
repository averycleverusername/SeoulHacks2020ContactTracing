
var PopupOpens = 0;
var CurrentLevel;
var F0;
var C0,C1,C2,C3,C4,C5,C6,C7,C8,C9,C10;
AddContactPopup = function () {
    var AddCPWndw = document.getElementById("AddCPWndw");
    var AddCPBtn = document.getElementById("AddCPBtn");
    var CloseBtn = document.getElementsByClassName("close") [0];
    AddCPBtn.onclick = function() {
        if (PopupOpens === 0) {
            AddF0Popup();
        } else if (PopupOpens === 1) {
            AddF1aPopup();
        } else if (C3 !== undefined){
            AddF2aPopup();
        } else if (PopupOpens === 3 && ContactDegree === "F1"){
            AddF1Popup();
            DDBtnPH6.style.display = "none";
        } else {
            AddContactDefaultPopup();
        }
        AddCPWndw.style.display = "block";
    };
    CloseBtn.onclick = function() {
        AddCPWndw.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target === AddCPWndw) {
            AddCPWndw.style.display = "none";
        }
    };
    var DDBtnPH1 = document.getElementById("DDBtnPH1");
    var DDBtnPH2 = document.getElementById("DDBtnPH2");
    var DDBtnPH3 = document.getElementById("DDBtnPH3");
    var DDBtnPH4 = document.getElementById("DDBtnPH4");
    var DDBtnPH5 = document.getElementById("DDBtnPH5");
    var DDBtnPH6 = document.getElementById("DDBtnPH6");
    var CPDD1 = document.getElementById("CPDD1");
    var CPDD2 = document.getElementById("CPDD2");
    var CPDD3 = document.getElementById("CPDD3");
    var HR3 = document.getElementById("HR3");
    var PCP = document.getElementById("PCP");
    AddContactDefaultPopup = function() {
        CPDD1.style.display = "block";
        CPDD2.style.display = "block";
        CPDD3.style.display = "block";
        DDBtnPH1.style.display = "none";
        DDBtnPH2.style.display = "none";
        DDBtnPH3.style.display = "none";
        DDBtnPH5.style.display = "none";
        HR3.style.display = "block";
        PCP.style.display = "block";
        DDBtnPH4.style.display = "none";
        DDBtnPH6.style.display = "none";
    };
    AddF0Popup = function() {
        CPDD1.style.display = "none";
        CPDD2.style.display = "none";
        CPDD3.style.display = "none";
        DDBtnPH1.style.display = "block";
        DDBtnPH2.style.display = "block";
        DDBtnPH3.style.display = "none";
        DDBtnPH5.style.display = "none";
        HR3.style.display = "none";
        PCP.style.display = "none";
        DDBtnPH4.style.display = "none";
        DDBtnPH6.style.display = "none";
    };
    AddF1aPopup = function() {
        document.getElementById("DDBtnPH4T").innerHTML = C0.name;
        CPDD1.style.display = "block";
        CPDD2.style.display = "none";
        CPDD3.style.display = "none";
        DDBtnPH1.style.display = "none";
        DDBtnPH2.style.display = "block";
        DDBtnPH3.style.display = "block";
        HR3.style.display = "block";
        PCP.style.display = "block";
        DDBtnPH4.style.display = "block";
        DDBtnPH6.style.display = "none";
    };
    AddF1Popup = function() {
        CPDD3.style.display = "none";
        DDBtnPH4.style.display = "block";
        ContactDegreeInputSelect('F1');
    };
    AddF2Popup = function() {
        CPDD3.style.display = "block";
        DDBtnPH4.style.display = "none";
        ContactDegreeInputSelect('F2');
    };
    AddF2aPopup = function() {
        CPDD2.style.display = "none";
        DDBtnPH5.style.display = "block";
    };
    AddF2bPopup = function() {
        document.getElementById("DDBtnPH6T").innerHTML = C1.name;
        CPDD3.style.display = "none";
        DDBtnPH4.style.display = "none";
        DDBtnPH6.style.display = "block";
        
    };
    var CPNameInput = document.getElementById("CPNameInput").value;
    SubmitBtn = document.getElementById("Submit");
    SubmitBtn.onclick = function(event) {NameInput(); SubmitInfo();};
    function Person(name, test, contact, parent) {
            this.name = name;
            this.testStatus = test;
            this.contactDegree = contact;
            this.parentContact = parent;
        }
    NameInput = function() {
        //var CPNameOutput = Math.pow(CPNameInput,2);
        CPNameInput = document.getElementById("CPNameInput").value;
        //document.getElementById("CPNameOutput").innerHTML = CPNameInput;
    };
    TestStatusInput = function() {
        ToggleMenu1 = function() {
            document.getElementById("CPDDMenu1").classList.toggle("ShowDD");
        };
        ToggleMenu1();
        window.onclick = function(event) {
            if (!event.target.matches('.DDBtn')) {
              var dropdowns = document.getElementsByClassName("DDContent");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("ShowDD")) {
                  openDropdown.classList.remove("ShowDD");
                }
              }
            }
        };
    };
    TestStatusInputSelect = function(select) {
        TestStatus = select;
        document.getElementById("CPDDMenuBtn1").innerHTML = select;
    };
    ContactDegreeInput = function() {
        ToggleMenu2 = function() {
            document.getElementById("CPDDMenu2").classList.toggle("ShowDD");
        };
        ToggleMenu2();
        window.onclick = function(event) {
            if (!event.target.matches('.DDBtn')) {
              var dropdowns = document.getElementsByClassName("DDContent");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("ShowDD")) {
                  openDropdown.classList.remove("ShowDD");
                }
              }
            }
        };
    };
    ContactDegreeInputSelect = function(select) {
        ContactDegree = select;
        document.getElementById("CPDDMenuBtn2").innerHTML = select;   
    };
    
    
    CDIF1 = document.getElementById("CDIF1");
    CDIF1.onclick = function(event) {AddF1Popup(); DDBtnPH6.style.display = "none";};
    CDIF2 = document.getElementById("CDIF2");
    CDIF2.onclick = function(event) {
        if (C2 === undefined) {
            AddF2bPopup();
        } else if (C3 === undefined) {
            AddF2Popup();
            var PCIS3 = document.getElementById("PCIS3");
            PCIS3.style.display = "none";
        } else {
            AddF2Popup();
        }
    };
        ParentContactInput = function() {
        ToggleMenu3 = function() {
            document.getElementById("CPDDMenu3").classList.toggle("ShowDD");
        };
        ToggleMenu3();
        window.onclick = function(event) {
            if (!event.target.matches('.DDBtn')) {
              var dropdowns = document.getElementsByClassName("DDContent");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("ShowDD")) {
                  openDropdown.classList.remove("ShowDD");
                }
              }
            }
        };
    };
    ParentContactInputSelect = function(select) {
        if (ContactDegree === "F1") {
            document.getElementById("CPDDMenuBtn3").innerHTML = C0.name;
        } else if (ContactDegree === "F2") {
            ParentContact = select;
            document.getElementById("CPDDMenuBtn3").innerHTML = select;
        }
    };
    SubmitInfo = function() {
        if (PopupOpens === 0) {
            ContactDegree = "F0";
        } else if (PopupOpens === 1) {
            ContactDegree = "F1";
            ParentContact = C0.name;
        } else if (ContactDegree === "F2" && C2 === undefined) {
            ParentContact = C1.name;
        }
        if (PopupOpens===0) {
            C0 = new Person(CPNameInput,"Positive","F0");
        } else if (PopupOpens>0) {
            if (ContactDegree === "F1") {
                if (C1 === undefined) {
                    C1 = new Person(CPNameInput,TestStatus,ContactDegree,ParentContact);
                } else if (C2 === undefined) {
                    C2 = new Person(CPNameInput,TestStatus,ContactDegree,ParentContact);                   
                } else if (C3 === undefined) {
                    C3 = new Person(CPNameInput,TestStatus,ContactDegree,ParentContact);
                }
            } else if (ContactDegree === "F2") {
                if (C4 === undefined) {
                    C4 = new Person(CPNameInput,TestStatus,ContactDegree,ParentContact);
                } else if (C5 === undefined) {
                    C5 = new Person(CPNameInput,TestStatus,ContactDegree,ParentContact);
                } else if (C6 === undefined) {
                    C6 = new Person(CPNameInput,TestStatus,ContactDegree,ParentContact);
                } else if (C7 === undefined) {
                    C7 = new Person(CPNameInput,TestStatus,ContactDegree,ParentContact);
                } else if (C8 === undefined) {
                    C8 = new Person(CPNameInput,TestStatus,ContactDegree,ParentContact);
                } else if (C9 === undefined) {
                    C9 = new Person(CPNameInput,TestStatus,ContactDegree,ParentContact);
                } else if (C10 === undefined) {
                    C10 = new Person(CPNameInput,TestStatus,ContactDegree,ParentContact);
                }
            }
        }
        PopupOpens++;
        AddCPWndw.style.display = "none";
    };
    
};
var sketchProc = function(processingInstance) {
     var p = processingInstance;
        p.size(800, 800); 
        p.frameRate(30);
        p.textSize(23);
        p.fill(255, 255, 0);
        p.ellipse(400, 400, 200, 200);
        p.fill(0,0,0);
        p.text("F0",400,400);
        p.noFill();
        p.stroke(0, 0, 0);
        p.strokeWeight(2);
    };

    var canvas = document.getElementById("mycanvas"); 
    var processingInstance = new Processing(canvas, sketchProc); 

