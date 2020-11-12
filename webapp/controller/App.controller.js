sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.tambola.Tambola.controller.App", {
		onInit: function () {

			var data = [{
				"ones": "1",
				"twos": "2",
				"threes": "3",
				"fours": "4",
				"fives": "5",
				"sixs": "6",
				"sevens": "7",
				"eights": "8",
				"nines": "9",
				"tens": "10"
			}, {
				"ones": "11",
				"twos": "12",
				"threes": "13",
				"fours": "14",
				"fives": "15",
				"sixs": "16",
				"sevens": "17",
				"eights": "18",
				"nines": "19",
				"tens": "20"
			}, {
				"ones": "21",
				"twos": "22",
				"threes": "23",
				"fours": "24",
				"fives": "25",
				"sixs": "26",
				"sevens": "27",
				"eights": "28",
				"nines": "29",
				"tens": "30"
			}, {
				"ones": "31",
				"twos": "32",
				"threes": "33",
				"fours": "34",
				"fives": "35",
				"sixs": "36",
				"sevens": "37",
				"eights": "38",
				"nines": "39",
				"tens": "40"
			}, {
				"ones": "41",
				"twos": "42",
				"threes": "43",
				"fours": "44",
				"fives": "45",
				"sixs": "46",
				"sevens": "47",
				"eights": "48",
				"nines": "49",
				"tens": "50"
			}, {
				"ones": "51",
				"twos": "52",
				"threes": "53",
				"fours": "54",
				"fives": "55",
				"sixs": "56",
				"sevens": "57",
				"eights": "58",
				"nines": "59",
				"tens": "60"
			}, {
				"ones": "61",
				"twos": "62",
				"threes": "63",
				"fours": "64",
				"fives": "65",
				"sixs": "66",
				"sevens": "67",
				"eights": "68",
				"nines": "69",
				"tens": "70"
			}, {
				"ones": "71",
				"twos": "72",
				"threes": "73",
				"fours": "74",
				"fives": "75",
				"sixs": "76",
				"sevens": "77",
				"eights": "78",
				"nines": "79",
				"tens": "80"
			}, {
				"ones": "81",
				"twos": "82",
				"threes": "83",
				"fours": "84",
				"fives": "85",
				"sixs": "86",
				"sevens": "87",
				"eights": "88",
				"nines": "89",
				"tens": "90"
			}];
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData(data);

			this.getView().setModel(oModel, "myNum");

		},
		numList: [],

		onGenerate: function () {
			if (this.numList.length <= 90) {
				var that = this;
				var randomNum = Math.floor(Math.random() * 90) + 1;
				var count = 0;
				for (var i = 0; i < this.numList.length; i++) {
					if (this.numList[i] == randomNum) {
						this.onGenerate();
						count = 1;
					}
				}
				if (count == 0) {
					this.numList.push(randomNum);
					this.getView().byId("number").setValue(randomNum) ;  
					var a,b;
					
					if(randomNum<=10)
					{
						a=0;
						b=randomNum-1;
					}
					else if(randomNum>=11 && randomNum<=20)
					{
						a=1;
						b=randomNum-11;
					}else if(randomNum>=21 && randomNum<=30)
					{
						a=2;
						b=randomNum-21;
					}else if(randomNum>=31 && randomNum<=40)
					{
						a=3;
						b=randomNum-31;
					}else if(randomNum>=41 && randomNum<=50)
					{
						a=4;
						b=randomNum-41;
					}else if(randomNum>=51 && randomNum<=60)
					{
						a=5;
						b=randomNum-51;
					}else if(randomNum>=61 && randomNum<=70)
					{
						a=6;
						b=randomNum-61;
					}
					else if(randomNum>=71 && randomNum<=80)
					{
						a=7;
						b=randomNum-71;
					}else if(randomNum>=81 && randomNum<=90)
					{
						a=8;
						b=randomNum-81;
					}
				
					document.getElementById("container-Tambola---App--myTable-rows-row"+a+"-col"+b).style.backgroundColor = "#4d94ff";
					var refTextArea=this.getView().byId("textarea");
					var values=refTextArea.getValue();
					if(values=="")
					{
						refTextArea.setValue(randomNum);
					}
					else
					{
						refTextArea.setValue(values+","+randomNum);	
					}
					
					
				}
			}
			if(this.numList.length === 90)
			{
				this.getView().byId("generateButton").setEnabled(false);
			
			}
				
			

		},
		getRandomNumber: function () {

		}
	});
});