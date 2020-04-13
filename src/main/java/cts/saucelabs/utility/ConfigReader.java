package cts.saucelabs.utility;

import java.io.File;
import java.io.FileInputStream;

import java.util.Properties;

public class ConfigReader {
	Properties pro;

	public ConfigReader() {

		try {
			File src=new File("C:\\Users\\M SHALINI\\eclipse-workspace\\shalini1\\Configuration\\Config.property");

			FileInputStream fis=new FileInputStream(src);

			pro=new Properties();

			pro.load(fis);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Exception is" + e.getMessage());
		}

	}
	public String getchromepath() {
		String path=pro.getProperty("ChromeDriver");
		return path;
	}
	public String getfirefoxpath() {
		String path=pro.getProperty("firefoxDriver");
		return path;
	}


	public String getApplicationURL() {
		return pro.getProperty("URL");
	}
	public String getExcelpath() {
		// TODO Auto-generated method stub
		String excelpath=pro.getProperty("Excelpath");
		return excelpath;

	}

}