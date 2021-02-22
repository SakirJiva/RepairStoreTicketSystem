const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.sendText = functions.https.onCall((data, context) => {
	const accountSid = ''; // from twilio dashboard
	const authToken = ''; // from twilio dashboard
	const client = require('twilio')(accountSid, authToken);

	client.messages
	  .create({
		 body: data.msg,
		 from: '', // number to send text from 
		 to: data.phone
	   })
	  .then(message => console.log(message.sid));
	  return `hello1`;
  
});

exports.prtLabl = functions.https.onCall((data, context) => {
	console.log('hello1.5');
	const Dymo = require('dymojs'),
	dymo = new Dymo();
	console.log('hello2');
	dymo.print('DYMO LabelWriter 450',labelXml);

	

	var labelXml = `
	<?xml version="1.0" encoding="utf-8"?>
	<DieCutLabel Version="8.0" Units="twips">
	  <PaperOrientation>Landscape</PaperOrientation>
	  <Id>LargeShipping</Id>
	  <PaperName>30256 Shipping</PaperName>
	  <DrawCommands>
		<RoundRectangle X="0" Y="0" Width="3331" Height="5715" Rx="270" Ry="270"/>
	  </DrawCommands>
	  <ObjectInfo>
		<TextObject>
		  <Name>TEXT</Name>
		  <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
		  <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>
		  <LinkedObjectName></LinkedObjectName>
		  <Rotation>Rotation0</Rotation>
		  <IsMirrored>False</IsMirrored>
		  <IsVariable>False</IsVariable>
		  <HorizontalAlignment>Left</HorizontalAlignment>
		  <VerticalAlignment>Middle</VerticalAlignment>
		  <TextFitMode>AlwaysFit</TextFitMode>
		  <UseFullFontHeight>True</UseFullFontHeight>
		  <Verticalized>False</Verticalized>
		  <StyledText>
			<Element>
			  <String>T</String>
			  <Attributes>
				<Font Family="Helvetica" Size="13" 
					Bold="False" Italic="False" Underline="False" Strikeout="False"/>
				<ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
			  </Attributes>
			</Element>
			<Element>
			  <String>EST123</String>
			  <Attributes>
				<Font Family="Helvetica" Size="13" 
					Bold="False" Italic="False" Underline="False" Strikeout="False"/>
				<ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
			  </Attributes>
			</Element>
		  </StyledText>
		</TextObject>
		<Bounds X="335.9998" Y="57.6001" Width="5337.6" Height="3192"/>
	  </ObjectInfo>
	</DieCutLabel>
	`;
	
	console.log('hello3');
	return `hello5`;
});