# 🧠 AutoSurgery – AI-Powered Real-Time Surgical Scene Understanding

AutoSurgery is a full-stack web application designed to assist in surgical environments by providing real-time detection and segmentation of surgical tools and sites using deep learning. It leverages the YOLO object detection model and a ResNet-UNet architecture for accurate and efficient AI-driven video analysis.

---

## 🚀 Features

- 🎯 **YOLO-based Instrument Detection**  
  Achieves **88% accuracy** in identifying and localizing surgical instruments from live video feed.

- 🩺 **ResNet-UNet Surgical Site Segmentation**  
  Delivers **86% accuracy** in highlighting surgical regions, aiding better understanding of the procedural context.

- ⚡ **Real-Time Inference**  
  Optimized backend using **Node.js** and **MongoDB**, with low-latency AI predictions integrated seamlessly into the UI.

- 🖥️ **Interactive Frontend**  
  Built using **React.js**, the frontend allows live streaming and visualization of AI predictions, ideal for operating room use or simulation environments.

---

## 📁 Project Structure

```
AutoSurgery/
├── client/              # React.js frontend
│   └── src/
├── server/              # Node.js backend with AI inference endpoints
├── models/              # YOLO and ResNet-UNet models
├── public/              # Static files and media
├── data/                # Sample video inputs or frame data
└── README.md
```

---

## 🛠️ Tech Stack

| Layer      | Technology            |
|------------|------------------------|
| Frontend   | React.js               |
| Backend    | Node.js, Express       |
| Database   | MongoDB                |
| AI Models  | YOLO (Detection), ResNet-UNet (Segmentation) |
| Deployment | Localhost (suggested: Vercel, Render, Docker) |

---

## 🧪 Usage

### 1. Clone the Repository
```bash
git clone https://github.com/sai-kiran7/AutoSurgery.git
cd AutoSurgery
```

### 2. Setup Frontend (React)
```bash
cd client
npm install
npm start
```

### 3. Setup Backend (Node.js)
```bash
cd ../server
npm install
node index.js
```

> Make sure MongoDB is running locally or configure the connection URI in the `.env` file.

---

## 🔬 Model Details

- **YOLOv5**: Pre-trained on medical/surgical datasets for multi-class instrument detection.
- **ResNet-UNet**: Custom implementation for semantic segmentation of surgical sites.
- Models are either pre-loaded or can be initialized via the `/models` directory.

---

## 📸 Screenshots

> Add relevant screenshots or GIFs here, e.g.:

<img src="./screenshots/detection-example.png" width="600" alt="YOLO Detection Example">

---

## 📌 TODO

- [ ] Improve segmentation mask accuracy with more annotated data
- [ ] Add Docker support for containerized deployment
- [ ] Deploy frontend and backend for public demo
- [ ] Add video recording and export feature

---

## 🤝 Contributing

Have suggestions or want to collaborate? Open an issue or submit a pull request — contributions are welcome!

---

Tech Stack:
●Surgical Tools are detected using YOLOv5 algorithm.
●Semantic segmentation is done with ResNet Architecture using FCN.
●Front-End accepts the surgical image and displays the results, Front end is built using React js.
●Node js (with Express js) serves as a backend framework.
●MongoDB is used as a database to store the user login credentials.
●An API is used to load the DeepLearning Models and when called performs the Detections on the given images.Fast-API is used as the api.


![image](https://github.com/user-attachments/assets/3d4f6c05-2697-4116-a82d-5e42a6c1e821)

User-Interface :
1. Register with the website by giving your First Name, Last Name, Email and Password. 

By clicking the Sign Up button your credentials will be saved in the MongoDB.

![image](https://github.com/user-attachments/assets/3ad46cef-f705-4107-9964-59ad5f8aa9ad)



2. Now Log in to your account by giving Email and Password.
 ![image](https://github.com/user-attachments/assets/a0b705c7-c325-4705-bbd4-121b3caaa580)


3. Now you will be entering the home page which welcomes you with your first and last name. 
![image](https://github.com/user-attachments/assets/60aab5f2-a885-4c9c-8a7a-e6d4423fbff1)


4. By clicking on choose file you need to upload the image 
![image](https://github.com/user-attachments/assets/30614bc4-adfe-4c1a-a4ee-a4faa6154efd)

   
5. Your selected image will be displayed.


![image](https://github.com/user-attachments/assets/d1392ee2-afff-4fee-92a4-1b0ae693df2b)



6. Now click on the submit button to get results. The detected image and segmented image will be displayed.

   ![image](https://github.com/user-attachments/assets/aa684efb-36a7-4c6c-8d1d-b6d9a7a1a935)
  ![image](https://github.com/user-attachments/assets/91da42bf-631e-4f6d-b4bf-8ec27e5b0030)

