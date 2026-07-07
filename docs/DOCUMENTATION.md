# Project Documentation

## Project Title

Comprehensive Analysis and Dietary Strategies with Tableau: A College Food Choices Case Study

## Overview

This project analyzes college student food choices, lifestyle habits, health perception, and academic indicators using a cleaned survey dataset and Tableau visualizations. It combines data preparation, Tableau dashboard design, analytical reporting, presentation material, and a lightweight Flask web application for showcasing the project.

The goal is to identify meaningful food-choice patterns among students and translate those findings into practical dietary strategies for students, university wellness teams, cafeteria managers, and nutrition stakeholders.

## Objectives

- Analyze student eating habits, including breakfast, eating out, cooking frequency, fruit intake, vegetable intake, vitamins, and comfort-food behavior.
- Explore relationships between food choices, perceived health, exercise, GPA, weight, and student lifestyle variables.
- Build Tableau worksheets, dashboards, and story points for interactive analysis.
- Present insights through a Flask-based web page and supporting project documents.
- Recommend practical dietary and cafeteria strategies based on the analysis.

## Dataset

The cleaned dataset is stored at:

```text
data/college_food_choices_final.csv
```

Dataset summary:

- 120 student records
- 41 variables
- Includes academic, dietary, lifestyle, comfort-food, cuisine-preference, and health-related fields

Important fields include:

- `GPA`
- `gender`
- `grade_level`
- `weight`
- `breakfast`
- `calories_day`
- `comfort_food_reason`
- `exercise`
- `cook`
- `eating_out`
- `fruit_day`
- `veggies_day`
- `vitamins`
- `health_category`
- cuisine preference fields such as `thai_food`, `italian_food`, `persian_food`, `greek_food`, and `indian_food`

## Project Structure

```text
.
+-- app.py
+-- Procfile
+-- README.md
+-- render.yaml
+-- requirements.txt
+-- data/
|   +-- college_food_choices_final.csv
+-- docs/
|   +-- DOCUMENTATION.md
|   +-- project_report.md
|   +-- video_script.md
+-- static/
|   +-- css/
|   |   +-- style.css
|   +-- js/
|       +-- dashboard.js
+-- tableau/
|   +-- tableau_build_guide.md
+-- templates/
    +-- index.html
```

## Application Description

The Flask application loads the cleaned CSV dataset and renders a project presentation page.

Main application file:

```text
app.py
```

Core behavior:

- Reads `data/college_food_choices_final.csv`
- Converts CSV rows into dictionaries
- Passes the dataset to `templates/index.html`
- Uses JavaScript in `static/js/dashboard.js` to update dashboard preview metrics and charts
- Uses CSS in `static/css/style.css` for layout and visual styling

## Installation

Install the required Python packages:

```bash
pip install -r requirements.txt
```

The project currently depends on:

- Flask
- Gunicorn

## Running Locally

Start the Flask application:

```bash
python app.py
```

Open the local site:

```text
http://127.0.0.1:5000
```

## Tableau Workflow

The Tableau build instructions are available in:

```text
tableau/tableau_build_guide.md
```

Recommended Tableau workflow:

1. Open Tableau Public or Tableau Desktop.
2. Connect to `data/college_food_choices_final.csv`.
3. Confirm that 120 rows and 41 columns are loaded.
4. Validate numeric and categorical field types.
5. Create the calculated fields described in the Tableau build guide.
6. Build the worksheet views.
7. Combine the visuals into the Food Choice Analysis dashboard.
8. Create the Tableau Story using the recommended story-point order.
9. Publish the workbook to Tableau Public if web embedding is required.

## Tableau Calculated Fields

### Consumption

```tableau
IF [Parameter 2] = "veggies_day" THEN [veggies_day]
ELSEIF [Parameter 2] = "vitamins" THEN [vitamins]
ELSE [fruit_day]
END
```

### Food Selection

```tableau
IF [Parameter 3] = "thai_food" THEN [thai_food]
ELSEIF [Parameter 3] = "italian_food" THEN [italian_food]
ELSEIF [Parameter 3] = "persian_food" THEN [persian_food]
ELSEIF [Parameter 3] = "greek_food" THEN [greek_food]
ELSE [indian_food]
END
```

## Visualizations

The Tableau analysis includes:

- KPI summary card
- Breakfast consumption bar chart
- Eating out versus cooking frequency line chart
- Health category by gender grouped bar chart
- Vitamins consumption by gender line chart
- Health versus food consumption grouped bar chart
- Healthy feeling and life rewarding bubble chart
- Weight versus exercise frequency treemap
- Comfort food reasons bubble chart

## Key Insights

- Breakfast habits and balanced diets are connected with stronger indicators of student wellness and academic readiness.
- Comfort-food consumption is commonly linked to boredom, sadness, and stress.
- Fruit and vegetable intake can be improved through easier access to convenient healthy options.
- Frequent eating out suggests a need for affordable and appealing balanced cafeteria meals.
- Interactive Tableau parameters help compare different nutrition and cuisine-preference variables.

## Recommendations

- Encourage quick, nutritious breakfast options for students with busy schedules.
- Promote fruit, vegetable, and vitamin-aware choices through campus wellness campaigns.
- Provide affordable balanced meal combos in cafeterias.
- Add clearly labeled calorie-aware and nutrient-rich menu items.
- Offer healthier late-evening food options during high-stress academic periods.
- Use the Tableau dashboard to support university nutrition planning and student wellness interventions.

## Deployment

This project includes deployment files for Render:

```text
Procfile
render.yaml
```

Render setup:

1. Push the project to GitHub.
2. Create a new Render Web Service.
3. Connect the GitHub repository.
4. Use this build command:

```bash
pip install -r requirements.txt
```

5. Use this start command:

```bash
gunicorn app:app
```

## Tableau Embed Setup

After publishing the Tableau workbook to Tableau Public:

1. Copy the Tableau Public dashboard or story embed URL.
2. Open `templates/index.html`.
3. Replace the placeholder `YOUR_TABLEAU_PUBLIC_VIEW_URL` if the template is updated to use a live Tableau embed.
4. Redeploy the Flask app.

## Supporting Documents

- `docs/project_report.md` contains the written project report.
- `docs/video_script.md` contains the presentation narration script.
- `tableau/tableau_build_guide.md` contains Tableau worksheet, dashboard, and story-building instructions.
- `README.md` contains quick-start project instructions.

## Maintenance Notes

- Keep the CSV column names consistent because the Flask app and JavaScript dashboard preview depend on specific field names.
- If the dataset is replaced, verify that expected fields such as `GPA`, `weight`, `grade_level`, `breakfast`, `gender`, `health_category`, `comfort_food_reason`, `eating_out`, and `cook` still exist.
- Update Tableau calculations and dashboard filters if new variable names are introduced.
- Re-run the Flask app locally after changing templates, styles, scripts, or dataset fields.

## Conclusion

This project demonstrates how Tableau and a small Flask web layer can turn student food-choice survey data into clear, actionable insights. The analysis supports evidence-based dietary strategies and helps university stakeholders understand how eating habits, comfort-food behavior, and lifestyle patterns relate to student wellbeing.
