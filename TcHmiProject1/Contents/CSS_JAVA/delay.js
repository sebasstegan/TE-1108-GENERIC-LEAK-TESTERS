// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.762.54/runtimes/native1.12-tchmi/TcHmi.d.ts" />

       
        function DelayButton(Button) {
            setTimeout(ReleaseButton, 3000)
            function ReleaseButton(){
                Button = false;
                console.log("worked1")
            }
            console.log("worked2")

        }

