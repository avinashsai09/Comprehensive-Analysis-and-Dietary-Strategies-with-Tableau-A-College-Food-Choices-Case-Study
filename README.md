# Comprehensive Analysis and Dietary Strategies with Tableau

A complete applied analytics project for a College Food Choices case study. It includes a clean finalized dataset, Tableau worksheet/dashboard plan, calculated fields, project report, video narration script, and a Flask website scaffold for embedding the published Tableau dashboard/story.

## Project Structure

- `data/college_food_choices_final.csv` - finalized clean dataset with 120 student records and 41 variables.
- `tableau/tableau_build_guide.md` - step-by-step Tableau connection, calculated fields, sheets, dashboard, and story instructions.
- `docs/project_report.md` - ready-to-use project documentation.
- `docs/video_script.md` - 5-7 minute screen-share presentation script.
- `app.py`, `templates/index.html`, `static/css/style.css` - Flask app for presenting the Tableau project.

## Run The Flask App

```bash
pip install -r requirements.txt
python app.py
```

Open `http://127.0.0.1:5000`.

## Push To GitHub

```bash
git add .
git commit -m "Prepare Flask Tableau project for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

If the remote already exists, use:

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## Deploy On Render

1. Push the project to GitHub.
2. Open Render and create a **New Web Service**.
3. Connect the GitHub repository.
4. Use these settings:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`
5. Deploy the service.

## Tableau Embed

Publish your Tableau workbook to Tableau Public, copy the dashboard/story embed URL, and replace `YOUR_TABLEAU_PUBLIC_VIEW_URL` in `templates/index.html`.
