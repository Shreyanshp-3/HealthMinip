import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const symptoms = [
  { id: 1, name: "Abdominal Pain (Stomach Pain), Long-term" },
  { id: 2, name: "Abdominal Pain (Stomach Pain), Short-term" },
  { id: 3, name: "Ankle Problem" },
  { id: 4, name: "Chest Problem in Infants and Children" },
  { id: 5, name: "Chest Pain, Acute" },
  { id: 6, name: "Cold and Flu" },
  { id: 7, name: "Cough" },
  { id: 8, name: "Diarrhea" },
  { id: 9, name: "Ear Problems" },
  { id: 10, name: "" },
  { id: 11, name: "" },
  { id: 12, name: "" },
  { id: 13, name: "" },

  // Add more symptoms as needed
];

const diseasesData = {
  "Abdominal Pain (Stomach Pain), Long-term": ["Does your pain get worse after you eat a big meal?", "Do you feel pressure in your upper abdomen that gets worse when you bend over or lie down at night?", "Is the pain relieved by antacids? Is your pain improved by eating?", "Does the pain start in your upper middle or upper right abdomen, and is it brought on by greasy or fatty foods?", "Has your appetite decreased? Have you lost 10 to 15 pounds over the past few months without trying?", "Do your skin or eyes have a yellow color, or is your urine dark, or are your stools turning white?"],

  "Abdominal Pain (Stomach Pain), Short-term": ["Do you have abdominal pain that is severe", "Are you pregnant, or do you believe you might be pregnant?", "Is your stomach very tender to touch? Does it hurt when you are driving and hit a bump or a pothole in the road?", "Do you have a sudden sharp pain that starts in the back near the ribs and moves down toward the groin?", "Do you have a mild pain, discomfort, or a feeling of pressure in the lower abdomen along with a burning sensation when you urinate?", "Do you have pain or a burning sensation in the upper abdomen that is either relieved or gets worse when you eat?", "Do you have watery diarrhea, fever, muscle aches, chills, nausea, or vomiting?"],

  "Ankle Problem": ["Did you begin to have pain and/or swelling after the ankle was hit?", "Is the ankle significantly swollen, and is the pain so intense that you can’t put weight on that foot?", "Is the ankle swollen and bruised, and can you still put weight on that foot?", "Do you have a fever, and is one or more of your joints painful, swollen, and red?", "Did the pain start suddenly, and is it painful when clothing or bedding rubs against your ankle?", "Do you usually feel pain before or during a change in the weather, and/or are you experiencing swelling, stiffness, and pain that gets worse during or after you use your ankle?"],

  "Chest Problem in Infants and Children": ["Does your child have a fever, a cough that produces mucus, and shortness of breath?", "Does your child have a tight cough, wheezing, and shortness of breath?", "Does your child have a dry cough and a sharp pain in the chest when he or she takes a deep breath?", "Does your child have sudden, sharp pain in one side of the chest with sudden shortness of breath?", "Does your child have a high fever, a very sore throat, and trouble breathing and/or swallowing?", "Does your child have pain and tenderness in the front of the chest, along the border of the breastbone and ribs, and does it get worse when your child coughs or takes a deep breath?"],

  "Chest Pain, Acute": ["Do you have severe chest pain?", "Do you have symptoms of a cold or the flu, such as fever, aches, chills, runny nose, and/or cough?", "Do you have a cough that produces greenish, yellowish, or tan mucus, a fever, and shortness of breath?", "Do you have a cough that produces a small amount of clear mucus, and does your chest hurt when you take a deep breath?", "Are you uncomfortable from your shortness of breath?", "Does the pain or discomfort occur only when you swallow or after you eat?", "Do you have a severe, sharp pain on one side of your chest when you take a deep breath?", "Do you have pressure in your chest, shortness of breath and numbness around your lips or in your hands or feet?", "Do you have a painful, blistering rash on your chest or back?", "Do you have back pain that radiates around to the front of your chest?"],

  "Cold and Flu": ["Do you have a sore throat and headache without nasal drainage or a cough?", "Did your symptoms start suddenly, and do you have a combination of symptoms including muscle aches, fatigue, chills, sore throat, runny nose, and/or cough?", "Are you experiencing wheezing, shortness of breath, and a persistent cough that brings up clear, yellow, or green mucus?", "Do you have a headache or muscle aches, nausea or vomiting, and watery diarrhea?", "Are you experiencing a runny and/or itchy nose, sneezing, and itchy eyes that get worse when you are outside or around certain triggers?", "Are you experiencing sneezing, a sore throat with a cough, a headache, congestion, and a runny nose?", "Do you have pressure or pain around your eyes, cheeks, nose, or forehead; nasal congestion; a headache; a dry cough; and/or any type of discharge from your nose?"],

  "Cough": ["Are you very short of breath, and are you coughing up pink, frothy mucus?", "Does your cough produce clear or pale yellow mucus?", "Does your cough produce yellow, tan, or green mucus?", "Does the cough come with shortness of breath and wheezing?", "Do you have heart problems?", "Have you recently started having sharp chest pain, rapid heartbeat, swelling of the legs and sudden shortness of breath?", "Have you unintentionally lost weight?", "Did you inhale dust, particles, or an object?", "Has you cough lasted longer than 6 weeks?"],

  "Diarrhea": ["Are you also nauseated or vomiting?", "Did you recently start taking an antibiotic or other new over-the-counter or prescribed medicine or supplement?", "Did your symptoms begin 30 minutes to 2 hours after eating or drinking dairy products?", "Did your diarrhea develop within 2-8 hours after eating food", "Have you traveled recently to another country?", "Do you have sharp pain in the lower left side of your abdomen, and are you often constipated?", "Is your diarrhea watery, and do you have a headache or muscle aches and a low fever?", "Do you have persistent, severe abdominal cramps, gas, and watery diarrhea followed by greasy stools?", "Do you have a fever, and are you experiencing pain in the middle or upper abdomen that radiates to your back?", "Are you bloated, and are you experiencing severe lower abdominal pain or cramping?", "Do you have diarrhea along with gas, bloating, and stomach pains every time you eat certain foods?"],

  "Ear Problems": ["Are you experiencing pain deep in the ear", "Do you have redness and swelling of the outer ear and the surrounding skin?", "Do you have headache-type pain and redness behind your ear","Do you have thick pus-filled (white) or bloody drainage from the ear canal that started after a sharp, sudden pain?","Is your ear swollen, and does it itch or hurt when you pull on your ear or earlobe?","Do you have swelling or thickening of one or more ears after wrestling or doing another contact sport or fighting event","Is fullness of the ear present on one or both sides without any other symptoms? Does the person have a history of ear wax production?","Can you see or feel a “pimple” in the ear canal?"],


  "Symptom 3": ["Disease G", "Disease H", "Disease I"],
  "Symptom 3": ["Disease G", "Disease H", "Disease I"],
  "Symptom 3": ["Disease G", "Disease H", "Disease I"],
  "Symptom 3": ["Disease G", "Disease H", "Disease I"],
  "Symptom 3": ["Disease G", "Disease H", "Disease I"],
  "Symptom 3": ["Disease G", "Disease H", "Disease I"],
  // Add more symptom-disease mappings as needed
};

const treatmentData = {
  "Does your pain get worse after you eat a big meal?": {
    heading: "Your problem may be a HIATAL HERNIA.",
    content: "See your doctor. Eat more frequent, but smaller meals. Avoid eating 2-3 hours before bed. Don’t lie down right after you eat. Elevate the head of your bed with textbooks, boards, or bricks under the headboard or front feet of your bed to reduce discomfort.",
  },
  "Do you feel pressure in your upper abdomen that gets worse when you bend over or lie down at night?": {
    heading: "Your problem may be a HIATAL HERNIA.",
    content: "See your doctor. Eat more frequent, but smaller meals. Avoid eating 2-3 hours before bed. Don’t lie down right after you eat. Elevate the head of your bed with textbooks, boards, or bricks under the headboard or front feet of your bed to reduce discomfort.",
  },
  "Is the pain relieved by antacids? Is your pain improved by eating?": {
    heading: "Your pain may be from GASTRITIS, an ULCER, or HEARTBURN. All are irritations of the stomach and esophagus.",
    content: "Eat smaller meals and use an over-the-counter antacid. If antacids don’t help and/or you find yourself using them more days than not in the average week, see your doctor.",
  },
  "Does the pain start in your upper middle or upper right abdomen, and is it brought on by greasy or fatty foods?": {
    heading: "Your pain may be a sign of GALLSTONES or CHOLECYSTITIS (inflammation or infection of the gallbladder).",
    content: "See your doctor.",
  },
  "Has your appetite decreased? Have you lost 10 to 15 pounds over the past few months without trying?": {
    heading: "Unintentional weight loss can be a sign of a serious condition, such as CANCER.",
    content: "See your doctor.",
  },
  "Do your skin or eyes have a yellow color, or is your urine dark, or are your stools turning white?": {
    heading: "You may have HEPATITIS, a serious infection of the liver.",
    content: "See your doctor.",
  },
  "Do you have abdominal pain that is severe": {
    heading: "In pregnant women, lower abdominal or pelvic pain along with vaginal bleeding may be a sign of a serious condition, such as ECTOPIC PREGNANCY or MISCARRIAGE.",
    content: "Call your doctor right away or go to the emergency room if you are less than 20 weeks pregnant. Go to the labor and delivery department if you are over 20 weeks pregnant.",
  },
  "Are you pregnant, or do you believe you might be pregnant?": {
    heading: "In pregnant women, lower abdominal or pelvic pain along with vaginal bleeding may be a sign of a serious condition, such as ECTOPIC PREGNANCY or MISCARRIAGE.",
    content: "Call your doctor right away or go to the emergency room if you are less than 20 weeks pregnant. Go to the labor and delivery department if you are over 20 weeks pregnant.",
  },
  "Is your stomach very tender to touch? Does it hurt when you are driving and hit a bump or a pothole in the road?": {
    heading: "These may be signs of a serious problem, such as APPENDICITIS OR PERFORATED APPENDIX INFECTIOUS DIARRHEA DIVERTICULITIS or ULCER PANCREATITIS BOWEL BLOCKAGE",
    content: "Call your doctor right away or go the hospital.",
  },
  "Do you have a sudden sharp pain that starts in the back near the ribs and moves down toward the groin?": {
    heading: "Your pain may be from a KIDNEY STONE or KIDNEY TUMOR. If you have a fever, you may have a KIDNEY or BLADDER INFECTION.",
    content: "Call your doctor right away or go the hospital.",
  },
  "Do you have a mild pain, discomfort, or a feeling of pressure in the lower abdomen along with a burning sensation when you urinate?": {
    heading: "CYSTITIS, an infection of the urinary tract, can be painful and cause abdominal discomfort.",
    content: "See your doctor promptly.",
  },
  "Do you have pain or a burning sensation in the upper abdomen that is either relieved or gets worse when you eat?": {
    heading: "This may be from GASTRITIS, an irritation of the stomach, or from an ULCER.",
    content: "Try taking an over-the-counter antacid on a regular basis. See your doctor if an antacid doesn’t help, if the pain comes back quickly after taking one, or if you are taking an antacid most days of an average week.",
  },
  "Do you have watery diarrhea, fever, muscle aches, chills, nausea, or vomiting?": {
    heading: "You may have GASTROENTERITIS, commonly called the stomach flu. Severe cases of gastroenteritis can lead to dehydration in infants and young children.",
    content: "Take over-the-counter fever-reducing medicines. (Don’t give children aspirin.) Drink water throughout the day/night. Call your doctor if vomiting and diarrhea persist for more than 2 days, or if you see any blood or mucus in the diarrhea. Call your doctor if you experience DEHYDRATION with such symptoms as lethargy, dry mouth, and/or decreased urination.",
  },
  // ANKLE PROBLEMS AND THEIR SOLUTIONS
  "Did you begin to have pain and/or swelling after the ankle was hit": {
    heading: "Treatment ",
    content: "Treatment for this is we have to give it some time to recover from the damage it has got",
  },
  "Is the ankle significantly swollen, and is the pain so intense that you can’t put weight on that foot?": {
    heading: "You may have a FRACTURE or a severe SPRAIN.",
    content: "See your doctor promptly. Don’t put weight on the injured ankle.    Raise the ankle above your heart while sitting or lying down. Use a compression wrap to help control swelling. Place an ice pack wrapped in a thin, damp cloth on the swollen area. You can also consider using a soft compression brace and crutches",
  },
  "Is the ankle swollen and bruised, and can you still put weight on that foot?": {
    heading: "You may have a SPRAINED ANKLE or a FRACTURE OF THE FIBULA.",
    content: "Raise the ankle above your heart while sitting or lying down. Use a compression wrap to help control swelling. Place an ice pack wrapped in a thin, damp cloth on the swollen area. You can also consider using a soft compression brace and crutches.",
  },
  "Do you have a fever, and is one or more of your joints painful, swollen, and red?": {
    heading: "Fever and a painful, red, swollen joint may be caused by an INFECTED JOINT (also called SEPTIC ARTHRITIS). More than one affected joint may be caused by RHEUMATIC FEVER.",
    content: "URGENT",
  },
  "Did the pain start suddenly, and is it painful when clothing or bedding rubs against your ankle?": {
    heading: "You may have GOUT (swelling and pain caused by too much uric acid in your body).",
    content: "See your doctor. During a gout attack (also called a flare), rest in bed until the pain eases up. Apply an ice pack wrapped in a thin, damp cloth to your ankle. Drink extra water to help flush uric acid from your body.    Avoid alcohol and high-fat foods. They can trigger gout attacks.",
  },
  "Do you usually feel pain before or during a change in the weather, and/or are you experiencing swelling, stiffness, and pain that gets worse during or after you use your ankle?": {
    heading: "These symptoms may be caused by OSTEOARTHRITIS (also called DEGENERATIVE JOINT DISEASE). Previous surgery or trauma to the ankle can also cause these symptoms.",
    content: "See your doctor. If you have osteoarthritis, he or she can treat your symptoms with a combination of therapies.    Relieve your symptoms by applying a heating pad or an ice pack wrapped in a thin, damp cloth to your ankle. Use nonsteroidal anti-inflammatory drugs (NSAIDs) to ease the pain.",
  },


  // chest problems in infants and children
  "Does your child have a fever, a cough that produces mucus, and shortness of breath?": {
    heading: "These symptoms may be caused by BRONCHITIS. A high fever along with a cough and shortness of breath could also be a sign of PNEUMONIA.",
    content: "If your child has BRONCHITIS, be sure he or she gets lots of rest and drinks plenty of fluids.PNEUMONIA is a serious infection.  If your child has a fever and a cough producing mucous, see your doctor right away. You can have your child take children’s acetaminophen and/or ibuprofen for fever. Do not give children 5 years and under cough or cold medicines.",
  },
  "Does your child have a tight cough, wheezing, and shortness of breath?": {
    heading: "These may be symptoms of BRONCHIOLITIS.",
    content: "BRONCHIOLITIS is a serious infection. Asthma flare-ups can also be a serious problem. See your doctor right away to find out what’s causing your symptoms. Do not give children 5 years and under cough or cold medicines.",
  },
  "Does your child have a dry cough and a sharp pain in the chest when he or she takes a deep breath?": {
    heading: "These symptoms may be caused by PLEURISY, an inflammation of the lining around the lung.",
    content: "See your doctor. He or she can determine what is causing the PLEURISY. Often, an anti-inflammatory drug will help relieve symptoms. Do not give aspirin to your child. Do not give children 5 years and under cough or cold medicines.",
  },
  "Does your child have sudden, sharp pain in one side of the chest with sudden shortness of breath?": {
    heading: "In rare cases, air will leak from a lung to fill the chest cavity. This makes it difficult to breathe. This condition is called a PNEUMOTHORAX.",
    content: "See your doctor right away or go to the closest emergency room or call an ambulance. Treatment of a PNEUMOTHORAX may require hospitalization.",
  },
  "Does your child have a high fever, a very sore throat, and trouble breathing and/or swallowing?": {
    heading: "These may be signs of a serious condition called EPIGLOTTITIS.",
    content: "Get emergency medical help right away. Go to the closest emergency room or call an ambulance.",
  },
  "Does your child have pain and tenderness in the front of the chest, along the border of the breastbone and ribs, and does it get worse when your child coughs or takes a deep breath?": {
    heading: "This may be caused by COSTOCHONDRITIS, an inflammation of the rib joints in the chest.",
    content: "Heat and an anti-inflammatory medicine, such as ibuprofen, may help relieve symptoms. Do not give aspirin to your child. See your doctor if the pain is severe or if it doesn’t improve with these medicines.",
  },



  // chest pain, Acute
  "Do you have severe chest pain?": {
    heading: "These could be symptoms of HYPERVENTILATION, an episode of overbreathing often caused by stress or anxiety. It can also be caused by increased breathing when your body is not getting enough oxygen and you begin to breathe faster.",
    content: "If you have a heart condition, lung condition, ASTHMA, or if you are experiencing rapid breathing for the first time, go directly to the emergency room. If you have hyperventilated before due to stress or anxiety, your doctor may have given you information about treating yourself. Lie down, relax, and try to slow your breathing. Try breathing through pursed lips (as if you were whistling), or cover your mouth and one nostril, and breathe through the other nostril. Talk with your doctor about relaxation treatments, to include mindfulness and meditation.",
  },
  "Do you have symptoms of a cold or the flu, such as fever, aches, chills, runny nose, and/or cough?": {
    heading: "Your symptoms may be from an infection, such as PNEUMONIA.",
    content: "PNEUMONIA can be a serious health problem. See your doctor right away or go to the closest emergency room if you are having trouble breathing.",
  },
  "Do you have a cough that produces greenish, yellowish, or tan mucus, a fever, and shortness of breath?": {
    heading: "Your symptoms may be from an infection, such as PNEUMONIA.",
    content: "PNEUMONIA can be a serious health problem. See your doctor right away or go to the closest emergency room if you are having trouble breathing.",
  },
  "Do you have a cough that produces a small amount of clear mucus, and does your chest hurt when you take a deep breath?": {
    heading: "You may have VIRAL BRONCHITIS. Your pain may also be caused by PLEURISY, an irritation of the lining of the lung that is usually caused by a viral infection. Hard coughing may also cause pain in the muscles and chest wall.",
    content: "Drink plenty of water, and try cough and cold medicines and/or anti-inflammatory medicines to relieve your symptoms. See your doctor if the cough continues for more than a few days or if you develop a fever.",
  },
  "Are you uncomfortable from your shortness of breath?": {
    heading: "Your pain may be from a HEART ATTACK or MYOCARDIAL INFARCTION. Similar to men, chest pain is the most common HEART ATTACK symptom in women. However, women are more likely than men to experience the following symptoms (with or without chest pain) when having a heart attack: abdominal pain, feeling lightheaded or dizzy, back or jaw pain, and unexplained fatigue.",
    content: "Call an ambulance right away or have someone drive you to the closest emergency room.",
  },
  "Does the pain or discomfort occur only when you swallow or after you eat?": {
    heading: "Your pain may be from an irritation of the stomach called GASTRITIS or an irritation of the esophagus called ESOPHAGITIS. A HIATAL HERNIA (a weakness in the diaphragm) or esophageal spasms may also cause this type of pain and discomfort. Trouble swallowing food (feeling like food gets stuck) is called DYSPHAGIA and should be evaluated.",
    content: "Try taking an antacid, eat smaller, more frequent, and less spicy meals. See your doctor if the problem persists or if you have DYSPHAGIA.",
  },
  "Do you have a severe, sharp pain on one side of your chest when you take a deep breath?": {
    heading: "Your pain may indicate PNEUMOTHORAX, a condition in which air leaks from a lung and fills the chest cavity. This makes it difficult to breathe.",
    content: "See your doctor right away or go to the closest emergency room. Treatment of PNEUMOTHORAX may require hospitalization.",
  },
  "Do you have pressure in your chest, shortness of breath and numbness around your lips or in your hands or feet?": {
    heading: "These could be symptoms of HYPERVENTILATION, an episode of overbreathing often caused by stress or anxiety. It can also be caused by increased breathing when your body is not getting enough oxygen and you begin to breathe faster.",
    content: "If you have a heart condition, lung condition, ASTHMA, or if you are experiencing rapid breathing for the first time, go directly to the emergency room. If you have hyperventilated before due to stress or anxiety, your doctor may have given you information about treating yourself. Lie down, relax, and try to slow your breathing. Try breathing through pursed lips (as if you were whistling), or cover your mouth and one nostril, and breathe through the other nostril. Talk with your doctor about relaxation treatments, to include mindfulness and meditation.",
  },
  "Do you have a painful, blistering rash on your chest or back?": {
    heading: "You may have a viral infection of the nerves and skin called SHINGLES, caused by the varicella zoster virus. This can often occur even if you have received the SHINGLES vaccine.",
    content: "See your doctor. SHINGLES usually clears on its own, but medication may ease the pain and help prevent complications, such as chronic pain at the site.",
  },
  "Do you have back pain that radiates around to the front of your chest?": {
    heading: "Your pain may be from a compressed nerve, possibly from a COMPRESSION FRACTURE, RIB FRACTURE, or a condition known as COSTOCHONDRITIS.",
    content: "See your doctor. You can take anti-inflammatory medications for COSTOCHONDRITIS.",
  },


  // cold and flu fewer treatment
  "Do you have a sore throat and headache without nasal drainage or a cough?": {
    heading: "You may have STREP THROAT, an infection caused by bacteria.",
    content: "See your doctor if your sore throat or fever lasts longer than 48 hours. He or she can do a test to find out if you have strep throat. If you do, your doctor may give you an antibiotic to treat it. You should also get plenty of rest and drink lots of water. Gargling with warm salt water (1/4 teaspoon of salt in 1 cup [8 ounces] of warm water) may help relieve your sore throat.",
  },
  "Did your symptoms start suddenly, and do you have a combination of symptoms including muscle aches, fatigue, chills, sore throat, runny nose, and/or cough?": {
    heading: "You may have a viral infection, possibly INFLUENZA (also known as the FLU).",
    content: "If you see your doctor within 48 hours of the start of your symptoms, he or she may prescribe an antiviral medicine to shorten the course of the flu.Get plenty of rest and drink lots of fluids. Over-the-counter (OTC) cough and cold medicines may relieve some of your symptoms. Don’t give OTC cough and cold medicines to a child younger than 4 years of age unless your child’s doctor says it’s okay.Remember, you can prevent the flu by getting a flu shot each fall.",
  },
  "Are you experiencing wheezing, shortness of breath, and a persistent cough that brings up clear, yellow, or green mucus?": {
    heading: "You may have ACUTE BRONCHITIS, an inflammation of the airways that is most often caused by a viral infection.",
    content: "Get plenty of rest and drink lots of fluids. Using a cool-mist humidifier may also relieve some of your symptoms. If you smoke, quitting is the best way to help your airways heal faster. Antibiotics do not work against the viruses that cause most cases of acute bronchitis. An over-the-counter (OTC) medicine can reduce inflammation, ease pain, and lower your fever. An expectorant (medicine that thins mucus) can help your cough clear mucus from your airways. Don’t give over-the-counter (OTC) cough and cold medicines to a child younger than 4 years of age unless your child’s doctor says it’s okay. If you are wheezing, you might need inhaled medicine. Your doctor will decide if this treatment is right for you.",
  },
  "Do you have a headache or muscle aches, nausea or vomiting, and watery diarrhea?": {
    heading: "You may have viral GASTROENTERITIS. Many people call it the STOMACH FLU, but it is not the same as influenza.",
    content: "Get plenty of rest and stay hydrated. Ease back into eating with bland foods and clear liquids. Children who have gastroenteritis should be given an oral rehydration solution (ORS) to avoid dehydration.",
  },
  "Are you experiencing a runny and/or itchy nose, sneezing, and itchy eyes that get worse when you are outside or around certain triggers?": {
    heading: "You may have ALLERGIC RHINITIS, an allergic reaction to triggers such as tree, grass, or weed pollen; animal dander from cats and dogs; mold; and dust mites.",
    content: "Try an over-the-counter (OTC) antihistamine medicine or an OTC nasal steroid spray. If your symptoms are getting worse or are hard to control, contact your doctor.",
  },
  "Are you experiencing sneezing, a sore throat with a cough, a headache, congestion, and a runny nose?": {
    heading: "You probably have a viral infection, commonly called a COLD.",
    content: "Get plenty of rest and drink lots of fluids. Try an over-the-counter (OTC) cough and cold medicine to treat the specific symptoms you are having. Don’t give OTC cough and cold medicines to a child younger than 4 years of age unless your child’s doctor says it’s okay.",
  },
  "Do you have pressure or pain around your eyes, cheeks, nose, or forehead; nasal congestion; a headache; a dry cough; and/or any type of discharge from your nose?": {
    heading: "You may be developing a viral or bacterial infection called SINUSITIS.",
    content: "Get plenty of rest and drink lots of water. Over-the-counter (OTC) pain relievers may help reduce facial pain. Holding a warm, wet towel against your face or breathing in steam through a warm cloth or towel can relieve sinus pressure and help open your sinus passages. A cool-mist humidifier may help your sinuses drain more easily. Contact your doctor if your symptoms last longer than 10 days or if your symptoms start to get better but then suddenly get worse again. Severe cases of sinusitis caused by bacteria may require an antibiotic.",
  },



  // cough cough
  "Are you very short of breath, and are you coughing up pink, frothy mucus?": {
    heading: "Your symptoms may be from a serious condition called PULMONARY EDEMA (fluid in the lungs).",
    content: "Have someone drive you to the nearest emergency room or call an ambulance right away.",
  },
  "Does your cough produce clear or pale yellow mucus?": {
    heading: "You likely have a viral infection, which includes the FLU.",
    content: "If it is within 48-72 hours from the beginning of symptoms, there are medications that your doctor can prescribe if you test positive for, or they suspect the FLU. If it is outside the 48-72-hour window or it is not the flu, then symptomatic treatment (treating cough, headache, sinus congestion, sore throat, etc. can be accomplished with an over-the-counter cough and cold medication). Get plenty of rest and drink plenty of water. Call your doctor if you have a high fever (>101.5°F) or your symptoms persist for more than 5 days.",
  },
  "Does your cough produce yellow, tan, or green mucus?": {
    heading: "You may have an infection of the airways, such as CHRONIC BRONCHITIS. If you have a fever with shaking chills and are very ill, you may have a more serious infection, such as PNEUMONIA.",
    content: "See your doctor or go to the closest emergency room if you are having trouble breathing. Your doctor can prescribe medicine to relieve your symptoms. Get plenty of rest, and drink lots of fluids. If you smoke, stop smoking.",
  },
  "Does the cough come with shortness of breath and wheezing?": {
    heading: "These symptoms may be a sign of ASTHMA, a closure or restriction of the airways.",
    content: "Asthma can be dangerous and should be diagnosed and treated by your doctor. Make sure that you get your annual influenza vaccination. If you feel that you can’t catch your breath or can’t stop coughing, then have someone drive you to the closest emergency room or call an ambulance.",
  },
  "Do you have heart problems?": {
    heading: "Treatment for Disease I",
    content: "Look for a Doctor who",
  },
  "Have you recently started having sharp chest pain, rapid heartbeat, swelling of the legs and sudden shortness of breath?": {
    heading: "These symptoms may be caused by TUBERCULOSIS or another type of infection.",
    content: "Have someone drive you to the closest emergency room or call an ambulance.",
  },
  "Have you unintentionally lost weight?": {
    heading: "This may be a sign of a serious illness, such as LUNG CANCER. Other signs of lung cancer may include a cough that produces bloody sputum, shortness of breath and wheezing.",
    content: "See your doctor right away.",
  },
  "Did you inhale dust, particles, or an object?": {
    heading: "Irritation of the airways will cause coughing to attempt to clear the object or irritation out of the airway.",
    content: "If you smoke, stop smoking. If the coughing is severe or if you don’t believe the irritant has been cleared from your airway, see your doctor or go to the emergency room right away.",
  },
  "Has you cough lasted longer than 6 weeks?": {
    heading: "This is known as CHRONIC COUGH. The three most common causes are UPPER AIRWAY COUGH SYNDROME, ASTHMA, and ACID REFLUX.",
    content: "UPPER AIRWAY COUGH SYNDROME is usually due to environmental exposures, such as ALLERGIC RHINITIS. This can be caused by triggers like pollen, weeds, cat/dog dander, mold, dust, etc. Treat with antihistamines and see your doctor. for consideration of an inhaled nasal steroid and potentially allergy shots.",
  },

  // diarrhea symptom and diagnostic
  "Are you also nauseated or vomiting?": {
    heading: "Your diarrhea may be a side effect or adverse reaction caused by the medicine.",
    content: "Talk to your doctor about the antibiotic or medicine you’re taking. He or she may be able to prescribe a medicine that won’t cause diarrhea. However, don’t stop taking your current medicine unless your doctor tells you.",
  },
  "Did you recently start taking an antibiotic or other new over-the-counter or prescribed medicine or supplement?": {
    heading: "Your diarrhea may be a side effect or adverse reaction caused by the medicine.",
    content: "Talk to your doctor about the antibiotic or medicine you’re taking. He or she may be able to prescribe a medicine that won’t cause diarrhea. However, don’t stop taking your current medicine unless your doctor tells you.",
  },
  "Did your symptoms begin 30 minutes to 2 hours after eating or drinking dairy products?": {
    heading: "Your symptoms may be caused by LACTOSE INTOLERANCE. People who have this condition have trouble digesting the sugar in milk and other dairy products.",
    content: "If you think you have LACTOSE INTOLERANCE, talk to your doctor. Your doctor may recommend taking lactase enzyme tablets or drops to help prevent problems. Also, avoid eating or drinking foods and beverages that make you sick.",
  },
  "Did your diarrhea develop within 2-8 hours after eating food": {
    heading: "You may have FOOD POISONING. Other symptoms of FOOD POISONING may include headache, fever, chills, and weakness.",
    content: "Most problems caused by FOOD POISONING will clear up within 12-48 hours. In the meantime, drink plenty of fluids to avoid dehydration. Children should be given an oral rehydration solution (ORS). Avoid solid foods until the diarrhea goes away. A simple way to make a home-based ORS is to boil a cup of white rice until the rice has completely overcooked and split and the water is cloudy. Keep the water and throw out the mushy rice. The water replaces the electrolytes lost in diarrhea.",
  },
  "Have you traveled recently to another country?": {
    heading: "You may have TRAVELER’S DIARRHEA, which is caused by contaminated food or drink.",
    content: "Over-the-counter medicines may help relieve your symptoms. Drink plenty of fluids, but avoid alcohol, caffeine, and dairy products. If your symptoms persist or if you have blood or mucous in your diarrhea, call your doctor.",
  },
  "Do you have sharp pain in the lower left side of your abdomen, and are you often constipated?": {
    heading: "You may have a condition that affects the intestines, such as DIVERTICULOSIS or DIVERTICULITIS.",
    content: "See your doctor. A diet high in FIBER and water may help relieve your symptoms.",
  },
  "Is your diarrhea watery, and do you have a headache or muscle aches and a low fever?": {
    heading: "You may have GASTROENTERITIS (stomach flu).",
    content: "Get plenty of rest. Children who have GASTROENTERITIS should be given an oral rehydration solution (ORS) to prevent dehydration. A simple way to make a home-based ORS is to boil a cup of white rice until the rice has completely overcooked and split and the water is cloudy. Keep the water and throw out the mushy rice. The water replaces the electrolytes lost in diarrhea.",
  },
  "Do you have persistent, severe abdominal cramps, gas, and watery diarrhea followed by greasy stools?": {
    heading: "You may have a form of BACTERIAL DIARRHEA or a parasite (GIARDIA).",
    content: "Call your doctor promptly. Be sure to drink plenty of fluids to prevent dehydration. Avoid caffeine.",
  },
  "Do you have a fever, and are you experiencing pain in the middle or upper abdomen that radiates to your back?": {
    heading: "You may have GALLBLADDER DISEASE, a perforated ULCER PANCREATITIS.",
    content: "Call your doctor promptly.",
  },
  "Are you bloated, and are you experiencing severe lower abdominal pain or cramping?": {
    heading: "These could be symptoms of a problem such as an INTESTINAL OBSTRUCTION or blockage.",
    content: "See your doctor right away, or go to the nearest emergency room.",
  },
  "Do you have diarrhea along with gas, bloating, and stomach pains every time you eat certain foods?": {
    heading: "MALABSORPTION problems, such as CELIAC DISEASE, can cause food-related diarrhea. Food sensitivities can also cause similar symptoms.",
    content: "Avoid the foods that make you sick, and discuss the problem with your doctor. Keep a food diary (writing down what and when you eat and when symptoms develop) to help determine patterns or triggers for your symptoms.",
  },



  // ear problems 
  "Are you experiencing pain deep in the ear": {
    heading: "You may have OTITIS MEDIA, an infection of the middle ear.",
    content: "See your doctor. Many ear infections will safely clear up on their own, but others require antibiotics.",
  },
  "Do you have redness and swelling of the outer ear and the surrounding skin?": {
    heading: "Your ear canal, outer ear, and the skin around your ear may be seriously infected.",
    content: "See your doctor right away.",
  },
  "Do you have headache-type pain and redness behind your ear": {
    heading: "Your pain may be from MASTOIDITIS, an infection of the bone just behind the ear, or from an ENLARGED LYMPH NODE.",
    content: "See your doctor right away.",
  },
  "Do you have thick pus-filled (white) or bloody drainage from the ear canal that started after a sharp, sudden pain?": {
    heading: "You may have a RUPTURED EARDRUM.",
    content: "See your doctor. Avoid infection by keeping your ear dry while it’s healing. Putting a warm heating pad on your ear may help relieve the pain.",
  },
  "Is your ear swollen, and does it itch or hurt when you pull on your ear or earlobe?": {
    heading: "Your pain may be caused by OTITIS EXTERNA, an infection of the ear canal that is also called SWIMMER’S EAR.",
    content: "See your doctor. Keep your ear dry while it’s healing. Putting a warm heating pad over your ear may help relieve the pain. You can prevent swimmer’s ear by placing 3 to 5 drops of a half-alcohol, half-white vinegar solution in the ear before and after swimming or taking showers",
  },
  "Do you have swelling or thickening of one or more ears after wrestling or doing another contact sport or fighting event": {
    heading: "This is known as CAULIFLOWER EAR and is a collection of fluid that occurs after direct trauma to the ear.",
    content: "Wearing appropriately sized ear protection during all practices, sparring, and bouts will prevent CAULIFLOWER EAR. If it develops, you can immediately have it drained and then compressed to reduce the chance that the fluid hardens and the changes become permanent.",
  },
  "Is fullness of the ear present on one or both sides without any other symptoms? Does the person have a history of ear wax production?": {
    heading: "This is likely a buildup of wax in the ear canal (CERUMINOSIS or CERUMEN IMPACTION).",
    content: "You can put 3-5 drops of warm water or 1 part warm water and 1 part white vinegar into your ear canal once per day to soften the wax. After 2-5 minutes, turn your head and lightly tug on your ear to discharge the drops. Do not insert cotton swabs into the ear canal.",
  },
  "Can you see or feel a “pimple” in the ear canal?": {
    heading: "A small INFECTION or LOCAL INFLAMMATION in the ear canal may be the cause.",
    content: "The infection/inflammation will probably go away by itself in 2 to 5 days. A mild pain reliever and warm compress may help relieve the pain. See your doctor if the pain becomes severe or if redness and warmth spread into or around the ear or if you develop fever.",
  },
  "": {
    heading: "Treatment for Disease I",
    content: "Treatment for Disease I",
  },
  "": {
    heading: "Treatment for Disease I",
    content: "Treatment for Disease I",
  },

  // Add more disease-treatment mappings as needed
};

function App() {
  const [selectedSymptom, setSelectedSymptom] = useState("");
  const [associatedDiseases, setAssociatedDiseases] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState("");
  const [treatment, setTreatment] = useState("");

  const handleSymptomChange = (symptom) => {
    setSelectedSymptom(symptom);
    setAssociatedDiseases(diseasesData[symptom]);
    setSelectedDisease("");
    setTreatment("");
  };

  const handleDiseaseClick = (disease) => {
    setSelectedDisease(disease);
    setTreatment(treatmentData[disease]);
  };

  return (
    <Flex direction={{ base: "column", md: "row" }} align="stretch">
      <Box width={{ base: "100%", md: "33%" }} padding="2">
        <VStack align="stretch">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Select Symptom:
          </Text>
          {symptoms.map((symptom) => (
            <Box
              key={symptom.id}
              border={selectedSymptom === symptom.name ? "1px solid blue" : "none"}
              borderRadius="md"
              padding="2"
              onClick={() => handleSymptomChange(symptom.name)}
              _hover={{ cursor: "pointer", backgroundColor: "gray.100" }}
              transition="background-color 0.3s ease"
              _active={{ backgroundColor: "blue.200" }}
            >
              <Text>{symptom.name}</Text>
            </Box>
          ))}
        </VStack>
      </Box>

      <Box width={{ base: "100%", md: "33%" }} padding="2">
        <VStack align="stretch">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Associated Diseases:
          </Text>
          {associatedDiseases.length > 0 ? (
            associatedDiseases.map((disease) => (
              <Box
                key={disease}
                border={selectedDisease === disease ? "1px solid blue" : "none"}
                borderRadius="md"
                padding="2"
                onClick={() => handleDiseaseClick(disease)}
                _hover={{ cursor: "pointer", backgroundColor: "gray.100" }}
                transition="background-color 0.3s ease"
                _active={{ backgroundColor: "blue.200" }}
              >
                <Text>{disease}</Text>
              </Box>
            ))
          ) : (
            <Text>No associated diseases</Text>
          )}
        </VStack>
      </Box>

      <Box width={{ base: "100%", md: "33%" }} padding="2">
        <VStack align="stretch">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Treatment:
          </Text>
          {treatment ? (
            <>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                DIAGNOSIS
              </Text>
              <Text fontSize="lg" fontWeight="" mb={2}>
                {treatment.heading}
              </Text>
              <Text fontSize="lg" fontWeight="BOLD" mb={2}>
                SELF CARE
                {/* {treatment.heading} */}
              </Text>

              <Text>
                {treatment.content}
              </Text>
            </>
          ) : (
            <Text>No treatment available</Text>
          )}
        </VStack>
      </Box>
    </Flex>
  );
}

export default App;
