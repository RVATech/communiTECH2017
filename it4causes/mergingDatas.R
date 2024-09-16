trim <- function (x) gsub("^\\s+|\\s+$", "", x)


setwd("D:/AA/Hackathon/Repeatable")
Houses = read.csv("RealMaster.txt")
Houses$PIN <- trim(Houses$PIN) 


HousesCens = read.csv("Parcel_Geographic_Summary.csv")
HousesCens$PIN_PIN <- trim(HousesCens$PIN_PIN) 
all_houses = merge(HousesCens,Houses,by.x="PIN_PIN", by.y="PIN")
all_houses$LocAddr = trim(all_houses$LocAddr)



DataSource = read.csv("DataSource.csv")[,c("PAddID","AddressLab")]
#Land = read.csv("RealLand.txt")

all_houses = merge(all_houses,DataSource,by.x="LocAddr", by.y="AddressLab")



#for xploratory purposes, you can count how many times a value appears in a dataframe
FindValue = function(x){
  #sum(x=='2001306')
  sum(grepl("20500",tolower(trim(x))))
}

#write.csv(all_houses,"all_houses_with_pffr.csv")



#sum(sapply(all_houses, FindValue),na.rm =TRUE)

#require(xlsx)

#ListOfSheets = c('SSI', "GROSS RENT PERCENT OF HH INCOME","Soc Sec Income","Age of Householder","Median HH Income","Public Assistance Income","Public Assistance Income")
#Excel_File = "Census File.xlsx"
#TEST = read.xlsx(Excel_File, sheetName = "GROSS RENT PERCENT OF HH INCOME",skip=1)




#all_houses[all_houses$TRACT10_ID==

all_houses$Period = substring(all_houses$Assmnt4D,7,10)

ListOfYEars = c("2015","2016")
for(Year in  ListOfYEars)
{
  TEST = aggregate(cbind(LandVal1,TotVal1,DwlgVal1, TaxDwlg1)~TRACT10_ID + Period,all_houses[all_houses$Period ==Year,],mean)
  
  
  TEST$PropertyCount= aggregate(LandVal1~TRACT10_ID + Period,all_houses[all_houses$Period ==Year,],length)$LandVal1
  
  assign(paste0("DataByTract",Year),TEST)
  
}

AllTracts = dplyr::bind_rows(lapply(ls(pattern="DataByTract"),get))
AllTracts$Period = as.numeric(AllTracts$Period)-2014
AllTracts$Tracts = substring(AllTracts$TRACT10_ID,1,3)
GoogleImageFile = read.csv("NorthsideCensusTracts.csv")

AllTracts = merge(GoogleImageFile,AllTracts, by=c("Tracts","Period"))
AllTracts = AllTracts[AllTracts$Tracts!=3,]
AllTracts = AllTracts[!duplicated(paste0(AllTracts$Tracts,AllTracts$Period)),]
write.csv(AllTracts,"Final_Result_DataByTract.csv",row.names=FALSE)
