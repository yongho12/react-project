# Diagnostic Service
## User Stroy 
- As a provider I can sumit a case to this website in order to get a diagnostic service. 

- As a technician I can view all cases and write a technical report so that clinician can read my technical report. 

- As a clinician I can view all cases and technical report so that I can write a techncial report. 

- as a Administrator, I can view all cases and assign those cases to technicians or clinicians. 


## Features - MVP
- Login In 
- Sign Up
- View all cases 
  - Assigned Cases
  - All Active Cases
  - My Completed Cases
  - All Completed Cases

    | Case # | Provider | Patient | Treatement Status |  Technician | Clinician | Days in Queue|
    |---|---|---|---|---|---|---|
    |case-001| Peter Smith| John Doe| Technical Review | Harry | Dr Kim | 20|

## Tables
    - Users
      - Id, FirstName, LastName, email(unique), hashed Password, Address, Clinic Name, Phone number, role { provider, technician, clinician, admin}

    - Cases
      - Id, providerID, patient_name, technician_id, clinician_id, submit_date, status { 0: submit 1: technician 2:clinician 3:completed}
    
    npx sequelize-cli model:generate --name Case --attributes patientName:string,submitDate:date,providerId:integer,technicianId:integer,clinicianId:integer,status:integer



     
