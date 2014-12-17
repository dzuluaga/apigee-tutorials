package com.example;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.UnrecoverableKeyException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.xml.sax.SAXException;

import com.apigee.flow.execution.ExecutionContext;
import com.apigee.flow.execution.ExecutionResult;
import com.apigee.flow.execution.spi.Execution;
import com.apigee.flow.message.MessageContext;

public class SimpleJavaCallout implements Execution{
	static String readFile(String path, Charset encoding) 
			  throws IOException 
			{
			  byte[] encoded = Files.readAllBytes(Paths.get(path));
			  return new String(encoded, encoding);
	}	
	public ExecutionResult execute(MessageContext messageContext, ExecutionContext executionContext) {
		try
		{			
			InputStream fstream = this.getClass().getResourceAsStream("/templates/stockTemplate.xml"); //read stockTemplate.xml as a class from classpath
			StringWriter writer = new StringWriter();
			IOUtils.copy(fstream, writer, "UTF-8");
			String theString = writer.toString();
			messageContext.setVariable("stockTemplateFileContent", theString); //assign file content to stockTemplateFileContent variable
			messageContext.setVariable("response.content", theString); // assign file content to response.content variable
			return ExecutionResult.SUCCESS;

		} catch (Exception e) {
			StringWriter sw = new StringWriter();
			e.printStackTrace(new PrintWriter(sw));
			String exceptionAsString = sw.toString();			
			messageContext.setVariable("ERROR_MESSAGE", exceptionAsString);
			return ExecutionResult.ABORT;
		}
	}
	
/*	public static void main(String[] args) throws IOException, KeyStoreException, NoSuchAlgorithmException, CertificateException, UnrecoverableKeyException, ParserConfigurationException, SAXException, XMLSecurityException{
		new SimpleJavaCallout();
	}
	
	public SimpleJavaCallout() throws IOException, KeyStoreException, NoSuchAlgorithmException, CertificateException, UnrecoverableKeyException, ParserConfigurationException, SAXException, XMLSecurityException {		
		org.apache.xml.security.Init.init();
		InputStream fstream = this.getClass().getResourceAsStream("/stockTemplate3.xml");
		InputStream kfstream = this.getClass().getResourceAsStream("/keystore.jks");
		//InputStream sigfstream = this.getClass().getResourceAsStream("/signature.xml");
		
		System.out.println(fstream);
		System.out.println(kfstream);

		StringWriter writer = new StringWriter();
		//IOUtils.copy(fstream, writer, "UTF-8");
		String theString = writer.toString();
		System.out.println(theString);
        String keystoreType = "JKS";
        String keystoreFile = "/keystore.jks";
        String keystorePass = "Password123";
        String privateKeyAlias = "mydomain";
        String privateKeyPass = "Password123";
        String certificateAlias = "mydomain";
        Element element = null;
        //File signatureFile = new File("/signature.xml");
              
	    //File targetFile = new File("src/targetFile.tmp");
	    //FileUtils.copyInputStreamToFile(kfstream, targetFile);
	    
	    //File signatureFile = new File("src/signature.xml");
	    //FileUtils.copyInputStreamToFile(sigfstream, signatureFile);
	    //System.out.println(targetFile);

		KeyStore ks = KeyStore.getInstance(keystoreType);
		//FileInputStream fis = new FileInputStream(targetFile);
		String BaseURI = "";//signatureFile.toURI().toURL().toString();  
		
		//System.out.println(fis);
		//ks.load(fis, keystorePass.toCharArray());
		ks.load(kfstream, keystorePass.toCharArray());
		PrivateKey privateKey = (PrivateKey) ks.getKey(privateKeyAlias, privateKeyPass.toCharArray());
		System.out.println(privateKey);
        javax.xml.parsers.DocumentBuilderFactory dbf = javax.xml.parsers.DocumentBuilderFactory.newInstance();
        dbf.setNamespaceAware(true);
        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
        Document doc = dBuilder.parse(fstream);
        System.out.println(doc);
        XMLSignature sig =
                new XMLSignature(doc, BaseURI, XMLSignature.ALGO_ID_SIGNATURE_RSA_SHA1);
        //optional, but better
        element = doc.getDocumentElement();
        element.normalize();
        element.getElementsByTagName("soap:Header").item(0).appendChild(sig.getElement());
        {
            Transforms transforms = new Transforms(doc);
            transforms.addTransform(Transforms.TRANSFORM_C14N_OMIT_COMMENTS);
            //Sign the content of SOAP Envelope
            sig.addDocument("", transforms, Constants.ALGO_ID_DIGEST_SHA1);

            //Adding the attachment to be signed
            //sig.addDocument("../resources/attachment.xml", transforms, Constants.ALGO_ID_DIGEST_SHA1);

        }
        //Signing procedure
        {
            X509Certificate cert =
                    (X509Certificate) ks.getCertificate(certificateAlias);
            sig.addKeyInfo(cert);
            sig.addKeyInfo(cert.getPublicKey());
            sig.sign(privateKey);
        }       
        
        //write signature to file
        //FileOutputStream f = new FileOutputStream(signatureFile);
        //XMLUtils.outputDOMc14nWithComments(doc, f);
        //f.close();
        
        // To generate from memory
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        XMLUtils.outputDOMc14nWithComments(doc, os);
        String aString = new String(os.toByteArray(),"UTF-8");
        System.out.println(aString);
	}*/
}
