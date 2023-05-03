import useUser from "./user";
import { jsPDF } from "jspdf";

export default function usePrint() {

    const { getUser, user } = useUser()
    const doc = new jsPDF();

    const printIncident = async (incident) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        await getUser(incident.userid)
        var date = new Date(incident.report_inf.date_of + " " + incident.report_inf.time_of)

        doc.setFontSize(9)
        doc.setProperties({
            title: "Report"
        });

        //header
        doc.setFont("courier", "bold");
        doc.setFontSize(11)
        doc.text("MDRRMO - Incident Reporting System", 15, 15);
        doc.text("Magallanes, Sorsogon", 15, 21);

        //Informant
        doc.setFontSize(9)
        doc.setFont("courier", "bold");
        doc.text("INFORMANT DETAILS", 15, 34);
        doc.setFont("courier", "normal");
        doc.text("Report By: " + incident.report_inf.name, 15, 40)
        if (user.value.role == 'admin') {
            doc.text("Report Type: Call", 15, 46)
        } else {
            doc.text("Report Type: By User", 15, 46)
        }
        var d = monthNames[date.getMonth()] + " " + date.getDay().toString().padStart(2, "0") + ", " + date.getFullYear() +
            " " + date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0")
        doc.text("Date of Report: " + d, 100, 40);
        doc.text("Report No: " + incident.id, 100, 46);

        var date2 = new Date(incident.datetime)
        var d2 = monthNames[date2.getMonth()] + " " + date2.getDay().toString().padStart(2, "0") + ", " + date2.getFullYear() +
            " " + date2.getHours().toString().padStart(2, "0") + ":" + date2.getMinutes().toString().padStart(2, "0")

        doc.setFont("courier", "bold");
        doc.text("ACCIDENT DETAILS", 15, 56);

        doc.setFont("courier", "normal");
        doc.text("Type of Accident: " + incident.type, 15, 62);
        doc.text("Location: ", 15, 67);
        doc.text(incident.fulllocation, 34, 73);
        //doc.text(incident.value.specific_location, 34, 73);
        doc.text("Severity: " + incident.severity.toString().toUpperCase(), 100, 62);
        doc.text("Date and Time: " + d2, 100, 67);
        var des = ""
        if (incident.description != null) {
            des = incident.description
        }
        doc.text("Description: " + des, 15, 79);

        doc.setFont("courier", "bold");
        doc.text("PATIENT DETAILS", 15, 95);
        doc.setFont("courier", "normal");
        console.log(incident.report_pat)
        var data = []
        var countp = 130
        incident.report_pat.forEach(p => {
            p.age = p.age.toString()
            data.push(p)
            countp += 7
        });
        var header = [
            {
                'id' : 'name',
                'name': 'name',
                'prompt': 'Name',
                'width': 65,
                'align': 'left',
                'padding': 0,
                'margin': 3
            },{
                'id' : 'address',
                'name': 'address',
                'prompt': 'Address',
                'width': 70,
                'align': 'left',
                'padding': 0,
                'margin': 3
            },{
                'id' : 'age',
                'name': 'age',
                'prompt': 'Age',
                'width': 20,
                'align': 'center',
                'padding': 0,
                'margin': 3
            },{
                'id' : 'cause',
                'name': 'cause',
                'prompt': 'Cause',
                'width': 50,
                'align': 'left',
                'padding': 0,
                'margin': 3
            },{
                'id' : 'status',
                'name': 'status',
                'prompt': 'Status',
                'width': 35,
                'align': 'center',
                'padding': 0,
                'margin': 3
            }
        ];
        doc.setFontSize(9)
        doc.table(15, 100, data, header, {
            left: 1,
            top: 1,
            bottom: 1,
            width: 100,
            autoSize: false,
            fontSize: 9,
            padding: 2,
            margins: 4,
            printHeaders: true
        });

        doc.setFont("courier", "bold");
        doc.text("RESPONDER DETAILS", 15, countp);
        doc.setFont("courier", "normal");
        var rl = ""
        if (incident.report_res.leader != null){
            rl = incident.report_res.leader
        }
        var rd = ""
        if (incident.report_res.driver != null){
            rd = incident.report_res.driver
        }
        var rm1 = ""
        if (incident.report_res.member1 != null){
            rm1 = incident.report_res.member1
        }
        var rm2 = ""
        if (incident.report_res.member2 != null){
            rm2 = incident.report_res.member2
        }
        var rm3 = ""
        if (incident.report_res.member3 != null){
            rm3 = incident.report_res.member3
        }
        var rm4 = ""
        if (incident.report_res.member4 != null){
            rm4 = incident.report_res.member4
        }
        var rm5 = ""
        if (incident.report_res.member5 != null){
            rm5 = incident.report_res.member5
        }
        var rm6 = ""
        if (incident.report_res.member6 != null){
            rm6 = incident.report_res.member6
        }
        var rm7 = ""
        if (incident.report_res.member7 != null){
            rm7 = incident.report_res.member7
        }
        var rm8 = ""
        if (incident.report_res.member8 != null){
            rm8 = incident.report_res.member8
        }
        var rm9= ""
        if (incident.report_res.member9 != null){
            rm9 = incident.report_res.member9
        }
        var rm10 = ""
        if (incident.report_res.member10 != null){
            rm10 = incident.report_res.member10
        }
        doc.text("Leader: " + rl, 15, countp + 7);
        doc.text("Driver: " + rd, 15, countp + 13);
        doc.text("Member's: " + rm1, 15, countp + 19);
        doc.text( rm2, 40, countp + 25);
        doc.text(rm3, 30, countp + 37);
        doc.text(rm4, 30, countp + 43);
        doc.text(rm5, 30, countp + 49);
        doc.text(rm6, 30, countp + 55);
        doc.text(rm7, 30, countp + 61);
        doc.text(rm8, 30, countp + 67);
        doc.text(rm9, 30, countp + 73);
        doc.text(rm10, 30, countp + 79);

        doc.output('dataurlnewwindow',{
            filename: incident.id + "" + (Math.random(10) * 100)
        });
        //doc.autoPrint()
        //doc.save("report.pdf");
    }

    return {
        printIncident,
    }
}