package com.example;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;
import org.apache.commons.io.IOUtils;

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
}
