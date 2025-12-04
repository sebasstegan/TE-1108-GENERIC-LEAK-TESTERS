// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.212/runtimes/native1.12-tchmi/TcHmi.d.ts" />
// Relatorio.js



function gerarRelatorioPDF(DataPLC) {
    // Create a new pdf instance jsPDF
    const doc = new jspdf.jsPDF();
    const aData = DataPLC;
    

    // Adiciona a data atual
    const data = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    let IndexPage = 34;
    let test1;
    let test2;

    for (let k = 0; k < IndexPage; k++) {
 
         if ( k > 0){
             doc.addPage();
         }
        
        //addImage('C:\Users\Sebastian.Ulloa\Desktop\GIT PROJECTS\TEMPLATES\TEMPLATE_VER1\TcHmiProject1\Images\JPEG_example_flower','JPEG',10,20,30,30,'df','NONE',0);

         //var img = new Image;
        // img.onload = function() {
          //   doc.addImage(this, 10, 10);
        // };
         //img.crossOrigin = "";  
         //img.src = 'C:\Users\Sebastian.Ulloa\Desktop\GIT PROJECTS\TEMPLATES\TEMPLATE_VER1\TcHmiProject1\Images\JPEG_example_flower.jpge';

        // const input = document.getElementById('imageInput');
         //input.addEventListener('change', (e) => {
           //  const file = e.target.files[0];
         //    const reader = new FileReader();
         //    reader.onload = (event) => {
         //        doc.addImage(event.target.result, 'JPG', 20, 20);
         //    };
         //    reader.readAsDataURL('C:\Users\Sebastian.Ulloa\Desktop\GIT PROJECTS\TEMPLATES\TEMPLATE_VER1\TcHmiProject1\Images\JPEG_example_flower');
        //});

         let ImagePath = path.resolve("C:\Users\Sebastian.Ulloa\Desktop\GIT PROJECTS\TEMPLATES\TEMPLATE_VER1\TcHmiProject1\Images\TeganInfo.png");
         let footer = fs.readFileSync(ImagePath,{ encoding:"base64",});
         doc.addImage(footer,"PNG", 20, 20, 20, 20);

        // Header
         doc.setFontSize(22);
         doc.text(`${aData.stEventsPdfConstants.sMachineName}`, 10, 20, { align: "left" });

         let Event = new String;
         let Type = new String;
         let DateTable = new String;
         let TimeTable = new String;
         let XposTable = new Number;

         doc.setFontSize(14);
         doc.text("Events Report", 10, 30);
         doc.setFontSize(10);
         doc.text(`Print Date: ${data}`, 10, 40);
         doc.text(`${time}`, 50, 40);
         doc.text(`User:`/*UserVariable*/, 10, 50);
         doc.text(`${aData.stEventsPdfConstants.sUser}`/*UserVariable*/, 50, 50);
         doc.text(`Group:`/*GroupVariable*/, 10, 60);
         doc.text(`${aData.stEventsPdfConstants.sGroup}`/*UserVariable*/, 50, 60);

       
         doc.setFontSize(14);
         doc.line(210, 70, 0, 70, 'F'); //(x1 widthR,y1 heightR,x2 widthL,y2 heightL,style)

         let PageNumber = k + 1;
         doc.setFontSize(8);
         doc.text(`${PageNumber}`, 200, 290);

        //Table
         doc.line(10, 105, 205, 105, 'F');
         doc.line(117, 95, 117, 270, 'F');
         doc.line(157, 95, 157, 270, 'F');
         doc.line(187, 95, 187, 270, 'F');


         doc.setFontSize(14);
         doc.text("Events", 10, 100);
         doc.text("Type", 120, 100);
         doc.text("Date", 160, 100);
         doc.text("Time", 190, 100);
        

         for (let i = 0; i < 30 ; i++) {

                
                let DataIndex = i + (k * 30);
                console.log(DataIndex);
                doc.setFontSize(10);
                Event = `${aData.stEventsPDF[DataIndex].sEvents}`;
                Type = `${aData.stEventsPDF[DataIndex].sType}`;
                DateTable = `${aData.stEventsPDF[DataIndex].sDate}`;
                TimeTable = `${aData.stEventsPDF[DataIndex].sTime}`;
                XposTable = 110 + (i * 5);
                doc.text(Event, 10, XposTable);
                doc.text(Type, 120, XposTable);
                doc.text(DateTable, 160, XposTable);
                doc.text(TimeTable, 190, XposTable);
                
    }

}
    



    

        //Save
    doc.save(`Events ${aData.stEventsPdfConstants.sFileName}`);
    
       
}

    // Relatorio.js

