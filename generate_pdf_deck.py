import sys
import os
from reportlab.lib.pagesizes import letter, landscape
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_presentation_pdf(output_filename="Presentation_Deck.pdf"):
    doc = SimpleDocTemplate(
        output_filename,
        pagesize=landscape(letter),
        rightMargin=36, leftMargin=36,
        topMargin=36, bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    # Custom Palette
    c_dark_bg    = colors.HexColor("#06090f")
    c_card_bg    = colors.HexColor("#111827")
    c_saffron    = colors.HexColor("#ff9900")
    c_blue       = colors.HexColor("#4a9eff")
    c_green      = colors.HexColor("#00c78c")
    c_purple     = colors.HexColor("#9b6dff")
    c_red        = colors.HexColor("#ff4d6d")
    c_text       = colors.HexColor("#f0f4ff")
    c_muted      = colors.HexColor("#8a99b5")
    c_border     = colors.HexColor("#2a3555")

    # Custom Typography Styles
    title_style = ParagraphStyle('DocTitle', parent=styles['Heading1'], fontName='Helvetica-Bold', fontSize=22, leading=26, textColor=colors.white)
    subtitle_style = ParagraphStyle('DocSubTitle', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=12, leading=15, textColor=c_blue)
    slide_tag_style = ParagraphStyle('SlideTag', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.5, leading=11, textColor=c_saffron)
    body_style = ParagraphStyle('BodyTextCustom', parent=styles['Normal'], fontName='Helvetica', fontSize=10, leading=13.5, textColor=c_text)
    muted_style = ParagraphStyle('MutedTextCustom', parent=styles['Normal'], fontName='Helvetica', fontSize=9, leading=12, textColor=c_muted)
    card_header_style = ParagraphStyle('CardHeader', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=11, leading=14, textColor=c_saffron)
    card_header_blue = ParagraphStyle('CardHeaderBlue', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=11, leading=14, textColor=c_blue)
    card_header_green = ParagraphStyle('CardHeaderGreen', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=11, leading=14, textColor=c_green)

    story = []

    def make_header(tag, title, subtitle=""):
        res = [
            Paragraph(f"<b>{tag.upper()}</b>", slide_tag_style),
            Spacer(1, 3),
            Paragraph(f"<b>{title}</b>", title_style),
        ]
        if subtitle:
            res.append(Spacer(1, 2))
            res.append(Paragraph(subtitle, subtitle_style))
        res.append(Spacer(1, 8))
        res.append(HRFlowable(width="100%", thickness=1, color=c_border, spaceBefore=2, spaceAfter=10))
        return res

    def make_footer(slide_num):
        footer_table = Table(
            [[Paragraph("<b>CityWise AI — All-India Digital Governance Portal</b>", muted_style),
              Paragraph(f"<b>Slide {slide_num} of 11</b>", ParagraphStyle('RightText', parent=muted_style, alignment=TA_RIGHT))]],
            colWidths=[540, 180]
        )
        footer_table.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 0),
        ]))
        return [Spacer(1, 8), HRFlowable(width="100%", thickness=1, color=c_border, spaceBefore=4, spaceAfter=4), footer_table]

    # -------------------------------------------------------------
    # SLIDE 1: Title Slide
    # -------------------------------------------------------------
    story.extend(make_header("Major Technical Presentation", "CityWise AI — All-India Digital Governance Portal", "Unified Governance Explorer, Official Political India Map &amp; Live Welfare Scheme Engine"))
    
    col1 = [Paragraph("<b>1. Official 2D India Map Visual</b>", card_header_style), Spacer(1, 4), Paragraph("&bull; Authentic political map visual covering all <b>28 States &amp; 8 UTs</b>.<br/>&bull; Interactive clickable pin hotspots overlay for instant navigation.<br/>&bull; Depicts state boundaries, capitals, and surrounding oceans.", body_style)]
    col2 = [Paragraph("<b>2. 3-Tier Location Hierarchy</b>", card_header_blue), Spacer(1, 4), Paragraph("&bull; <b>State &rarr; District/City &rarr; Village/Ward</b> drill-down architecture.<br/>&bull; Displays Chief Minister, Population, and Area metrics.<br/>&bull; Includes 8 direct-dial emergency department helpline numbers.", body_style)]
    col3 = [Paragraph("<b>3. AI &amp; ML Matching Engine</b>", card_header_green), Spacer(1, 4), Paragraph("&bull; Predictive demographic eligibility evaluation &amp; pattern matching.<br/>&bull; NLP schema classification for 30+ Central &amp; State schemes.<br/>&bull; Realtime auto-sync with <b>data.gov.in &amp; myScheme.gov.in</b>.", body_style)]
    
    t1 = Table([[col1, col2, col3]], colWidths=[235, 235, 235])
    t1.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), c_card_bg),
        ('BOX', (0,0), (-1,-1), 1, c_border),
        ('INNERGRID', (0,0), (-1,-1), 1, c_border),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(t1)
    story.append(Spacer(1, 14))
    meta_table = Table([[Paragraph("<b>Presenter:</b> Lead Full-Stack Software Developer", body_style), Paragraph("<b>Domain:</b> Digital Public Infrastructure (DPI) &amp; e-Governance", body_style)]], colWidths=[360, 360])
    story.append(meta_table)
    story.extend(make_footer(1))
    story.append(PageBreak())

    # -------------------------------------------------------------
    # SLIDE 2: Executive Summary & Vision
    # -------------------------------------------------------------
    story.extend(make_header("Executive Summary", "Project Vision &amp; Strategic Key Objectives", "Democratizing Public Welfare Access across All 36 Indian Administrative Divisions"))
    col1 = [Paragraph("<b>Strategic Objectives</b>", card_header_style), Spacer(1, 4), Paragraph("&bull; <b>100% Pan-India Accessibility:</b> Eliminate geographical barriers by unifying data for all 36 Indian States &amp; UTs.<br/>&bull; <b>Hyper-Local Transparency:</b> Provide village-level governance stats and local ward helpline numbers.<br/>&bull; <b>Click-Only Verified Search:</b> Ensure clean zero-noise search results rendered exclusively upon user query.<br/>&bull; <b>Bilingual Voice Navigation:</b> Integrated browser-native Speech Synthesis (Web Speech API) for non-literate support.", body_style)]
    col2 = [Paragraph("<b>Target Audience &amp; Reach</b>", card_header_blue), Spacer(1, 4), Paragraph("&bull; <b>Farmers &amp; Workers:</b> PM-KISAN, MP Kisan Kalyan, Solar Pump Schemes.<br/>&bull; <b>Students &amp; Youth:</b> Bihar Student Credit Card, MP Sikho Kamao, UP Yuva Udyami.<br/>&bull; <b>Women &amp; Girls:</b> MP Ladli Behna, UP Kanya Sumangala, Bihar Kanya Utthan.<br/>&bull; <b>Vendors &amp; Artisans:</b> PM SVANidhi, PM Vishwakarma, PM Mudra Loans.<br/>&bull; <b>Senior Citizens:</b> Indira Gandhi Pension, PM-JAY Ayushman Bharat.", body_style)]
    t2 = Table([[col1, col2]], colWidths=[355, 355])
    t2.setStyle(TableStyle([('BACKGROUND', (0,0), (-1,-1), c_card_bg), ('BOX', (0,0), (-1,-1), 1, c_border), ('INNERGRID', (0,0), (-1,-1), 1, c_border), ('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 12)]))
    story.append(t2)
    story.extend(make_footer(2))
    story.append(PageBreak())

    # -------------------------------------------------------------
    # SLIDE 3: Problem Statement
    # -------------------------------------------------------------
    story.extend(make_header("Problem Statement", "Current Challenges in Public Governance Delivery", "Addressing Information Asymmetry, Dialing Friction, and Middlemen Exploitation"))
    p1 = [Paragraph("<b>1. Extreme Information Fragmentation</b>", card_header_style), Paragraph("Over 500+ separate government websites exist across central and state ministries, making central discovery impossible for rural citizens.", body_style)]
    p2 = [Paragraph("<b>2. Lack of Hyper-Local Contact Data</b>", card_header_style), Paragraph("Emergency helplines for essential local departments (Water Board, Power Discom 1912, PWD Roads) are difficult to locate at district/village level.", body_style)]
    p3 = [Paragraph("<b>3. High Barrier &amp; Language Friction</b>", card_header_style), Paragraph("Complex government portals with heavy legal jargon confuse non-technical citizens seeking basic welfare assistance.", body_style)]
    p4 = [Paragraph("<b>4. Unfiltered Search Noise &amp; Middlemen</b>", card_header_style), Paragraph("Traditional portals display dump lists without highlighting target eligibility criteria, forcing poor citizens to pay commission fees to agents.", body_style)]
    t3 = Table([[p1, p2], [p3, p4]], colWidths=[355, 355])
    t3.setStyle(TableStyle([('BACKGROUND', (0,0), (-1,-1), c_card_bg), ('BOX', (0,0), (-1,-1), 1, c_border), ('INNERGRID', (0,0), (-1,-1), 1, c_border), ('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 12)]))
    story.append(t3)
    story.extend(make_footer(3))
    story.append(PageBreak())

    # -------------------------------------------------------------
    # SLIDE 4: System Architecture & Flowchart
    # -------------------------------------------------------------
    story.extend(make_header("System Architecture Flowchart", "Overall System Architecture &amp; Data Flow Workflow", "Seamless Flow from Client Single-Page Application to Realtime Data Sync"))
    fc_data = [[Paragraph("<b>1. Client Web UI</b><br/><font size=8 color='#8a99b5'>HTML5 / CSS3 / ES6 JS SPA</font>", ParagraphStyle('FC', parent=body_style, alignment=TA_CENTER)),
                 Paragraph("<b>&rarr;</b>", ParagraphStyle('FCA', parent=title_style, alignment=TA_CENTER, textColor=c_saffron)),
                 Paragraph("<b>2. Drilldown Engine</b><br/><font size=8 color='#8a99b5'>State&rarr;City&rarr;Village DB</font>", ParagraphStyle('FC', parent=body_style, alignment=TA_CENTER)),
                 Paragraph("<b>&rarr;</b>", ParagraphStyle('FCA', parent=title_style, alignment=TA_CENTER, textColor=c_saffron)),
                 Paragraph("<b>3. AI/ML Matcher</b><br/><font size=8 color='#8a99b5'>Predictive Rule-Engine</font>", ParagraphStyle('FC', parent=body_style, alignment=TA_CENTER)),
                 Paragraph("<b>&rarr;</b>", ParagraphStyle('FCA', parent=title_style, alignment=TA_CENTER, textColor=c_saffron)),
                 Paragraph("<b>4. Live API Sync</b><br/><font size=8 color='#8a99b5'>data.gov.in Integration</font>", ParagraphStyle('FC', parent=body_style, alignment=TA_CENTER))]]
    fc_table = Table(fc_data, colWidths=[150, 30, 150, 30, 150, 30, 150])
    fc_table.setStyle(TableStyle([('BACKGROUND', (0,0), (0,0), c_card_bg), ('BACKGROUND', (2,0), (2,0), c_card_bg), ('BACKGROUND', (4,0), (4,0), c_card_bg), ('BACKGROUND', (6,0), (6,0), c_card_bg), ('BOX', (0,0), (0,0), 1, c_green), ('BOX', (2,0), (2,0), 1, c_saffron), ('BOX', (4,0), (4,0), 1, c_saffron), ('BOX', (6,0), (6,0), 1, c_purple), ('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('PADDING', (0,0), (-1,-1), 10)]))
    story.append(fc_table)
    story.append(Spacer(1, 14))
    sub_arch1 = [Paragraph("<b>Client-Side Performance</b>", card_header_style), Paragraph("Zero external framework bloat. Loads in under 150ms with 60 FPS smooth transitions.", body_style)]
    sub_arch2 = [Paragraph("<b>Data Integrity Verification</b>", card_header_blue), Paragraph("All scheme definitions strictly mapped to official ministry portals with verified application URLs.", body_style)]
    t4 = Table([[sub_arch1, sub_arch2]], colWidths=[355, 355])
    t4.setStyle(TableStyle([('BACKGROUND', (0,0), (-1,-1), c_card_bg), ('BOX', (0,0), (-1,-1), 1, c_border), ('INNERGRID', (0,0), (-1,-1), 1, c_border), ('PADDING', (0,0), (-1,-1), 12)]))
    story.append(t4)
    story.extend(make_footer(4))
    story.append(PageBreak())

    # -------------------------------------------------------------
    # SLIDE 5: Location Drill-down Flowchart
    # -------------------------------------------------------------
    story.extend(make_header("Location Navigation Flowchart", "3-Tier Location Drill-Down Workflow Architecture", "Geographical Navigation from State Pins down to Local Village Governance"))
    fc_loc = [[Paragraph("<b>Step 1: State / UT</b><br/><font size=8 color='#8a99b5'>Official Map Pin Overlay</font>", ParagraphStyle('FC', parent=body_style, alignment=TA_CENTER)),
                Paragraph("<b>&rarr;</b>", ParagraphStyle('FCA', parent=title_style, alignment=TA_CENTER, textColor=c_saffron)),
                Paragraph("<b>Step 2: District / City</b><br/><font size=8 color='#8a99b5'>Bhopal, Lucknow, Patna</font>", ParagraphStyle('FC', parent=body_style, alignment=TA_CENTER)),
                Paragraph("<b>&rarr;</b>", ParagraphStyle('FCA', parent=title_style, alignment=TA_CENTER, textColor=c_saffron)),
                Paragraph("<b>Step 3: Village / Ward</b><br/><font size=8 color='#8a99b5'>Sanwer, Bairasia, Danapur</font>", ParagraphStyle('FC', parent=body_style, alignment=TA_CENTER)),
                Paragraph("<b>&rarr;</b>", ParagraphStyle('FCA', parent=title_style, alignment=TA_CENTER, textColor=c_saffron)),
                Paragraph("<b>Step 4: Local Drawer</b><br/><font size=8 color='#8a99b5'>8 Helplines &amp; CM Stats</font>", ParagraphStyle('FC', parent=body_style, alignment=TA_CENTER))]]
    fc_loc_table = Table(fc_loc, colWidths=[150, 30, 150, 30, 150, 30, 150])
    fc_loc_table.setStyle(TableStyle([('BACKGROUND', (0,0), (0,0), c_card_bg), ('BACKGROUND', (2,0), (2,0), c_card_bg), ('BACKGROUND', (4,0), (4,0), c_card_bg), ('BACKGROUND', (6,0), (6,0), c_card_bg), ('BOX', (0,0), (0,0), 1, c_green), ('BOX', (2,0), (2,0), 1, c_saffron), ('BOX', (4,0), (4,0), 1, c_saffron), ('BOX', (6,0), (6,0), 1, c_purple), ('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('PADDING', (0,0), (-1,-1), 10)]))
    story.append(fc_loc_table)
    story.append(Spacer(1, 14))
    sub_loc1 = [Paragraph("<b>Visual Map Integration</b>", card_header_style), Paragraph("Authentic political map visual featuring clickable pin overlays for all 36 States &amp; UTs.", body_style)]
    sub_loc2 = [Paragraph("<b>Breadcrumb Tracking</b>", card_header_blue), Paragraph("Real-time breadcrumb bar (`India &rarr; State &rarr; District &rarr; Village`) for intuitive back-navigation.", body_style)]
    t5 = Table([[sub_loc1, sub_loc2]], colWidths=[355, 355])
    t5.setStyle(TableStyle([('BACKGROUND', (0,0), (-1,-1), c_card_bg), ('BOX', (0,0), (-1,-1), 1, c_border), ('INNERGRID', (0,0), (-1,-1), 1, c_border), ('PADDING', (0,0), (-1,-1), 12)]))
    story.append(t5)
    story.extend(make_footer(5))
    story.append(PageBreak())

    # -------------------------------------------------------------
    # SLIDE 6: 8 Helplines Matrix
    # -------------------------------------------------------------
    story.extend(make_header("Department Helplines", "Direct Emergency &amp; Department Helplines Matrix", "Instant Click-to-Call Access for 8 Essential Department Categories across All 36 Regions"))
    h_data = [
        [Paragraph("<b>112 Emergency</b><br/><font size=8 color='#ff9900'>National Police &amp; Fire</font>", body_style),
         Paragraph("<b>Water Board</b><br/><font size=8 color='#4a9eff'>1800-180-1230</font>", body_style),
         Paragraph("<b>Power Discom</b><br/><font size=8 color='#ffb347'>1912</font>", body_style),
         Paragraph("<b>PWD Roads</b><br/><font size=8 color='#9b6dff'>1800-180-4167</font>", body_style)],
        [Paragraph("<b>Municipal Corp</b><br/><font size=8 color='#00c78c'>1800-11-8585</font>", body_style),
         Paragraph("<b>Health &amp; Ambulance</b><br/><font size=8 color='#ff9f43'>104</font>", body_style),
         Paragraph("<b>Kisan Center</b><br/><font size=8 color='#43e97b'>1800-180-1551</font>", body_style),
         Paragraph("<b>Transport Dept</b><br/><font size=8 color='#00d4d4'>1800-22-4000</font>", body_style)]
    ]
    ht = Table(h_data, colWidths=[175, 175, 175, 175])
    ht.setStyle(TableStyle([('BACKGROUND', (0,0), (-1,-1), c_card_bg), ('BOX', (0,0), (-1,-1), 1, c_border), ('INNERGRID', (0,0), (-1,-1), 1, c_border), ('PADDING', (0,0), (-1,-1), 12)]))
    story.append(ht)
    story.extend(make_footer(6))
    story.append(PageBreak())

    # -------------------------------------------------------------
    # SLIDE 7: Scheme Search Flowchart
    # -------------------------------------------------------------
    story.extend(make_header("Welfare Scheme Engine", "Live Welfare Scheme Search Workflow &amp; Filter Engine", "Click-Only Query Execution Returning Target Eligibility Criteria &amp; Official Apply Links"))
    fc_sch = [[Paragraph("<b>1. Input Profile</b><br/><font size=8 color='#8a99b5'>State, Age, Gender, Occ</font>", ParagraphStyle('FC', parent=body_style, alignment=TA_CENTER)),
                Paragraph("<b>&rarr;</b>", ParagraphStyle('FCA', parent=title_style, alignment=TA_CENTER, textColor=c_saffron)),
                Paragraph("<b>2. Click Search</b><br/><font size=8 color='#8a99b5'>Predictive ML Filter</font>", ParagraphStyle('FC', parent=body_style, alignment=TA_CENTER)),
                Paragraph("<b>&rarr;</b>", ParagraphStyle('FCA', parent=title_style, alignment=TA_CENTER, textColor=c_saffron)),
                Paragraph("<b>3. Query 30+ DB</b><br/><font size=8 color='#8a99b5'>MP, UP, Bihar, Central</font>", ParagraphStyle('FC', parent=body_style, alignment=TA_CENTER)),
                Paragraph("<b>&rarr;</b>", ParagraphStyle('FCA', parent=title_style, alignment=TA_CENTER, textColor=c_saffron)),
                Paragraph("<b>4. Render Cards</b><br/><font size=8 color='#8a99b5'>Target Group &amp; Link</font>", ParagraphStyle('FC', parent=body_style, alignment=TA_CENTER))]]
    fc_sch_table = Table(fc_sch, colWidths=[150, 30, 150, 30, 150, 30, 150])
    fc_sch_table.setStyle(TableStyle([('BACKGROUND', (0,0), (0,0), c_card_bg), ('BACKGROUND', (2,0), (2,0), c_card_bg), ('BACKGROUND', (4,0), (4,0), c_card_bg), ('BACKGROUND', (6,0), (6,0), c_card_bg), ('BOX', (0,0), (0,0), 1, c_green), ('BOX', (2,0), (2,0), 1, c_saffron), ('BOX', (4,0), (4,0), 1, c_saffron), ('BOX', (6,0), (6,0), 1, c_purple), ('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('PADDING', (0,0), (-1,-1), 10)]))
    story.append(fc_sch_table)
    story.append(Spacer(1, 14))
    sub_sch1 = [Paragraph("<b>Target Eligibility Transparency</b>", card_header_style), Paragraph("Every card explicitly features a 🎯 <b>Target Group</b> section clarifying exact beneficiary criteria.", body_style)]
    sub_sch2 = [Paragraph("<b>Document Checklist</b>", card_header_blue), Paragraph("Lists required documents (Aadhaar, Samagra ID, Land Records, Income Cert) to prevent application rejection.", body_style)]
    t7 = Table([[sub_sch1, sub_sch2]], colWidths=[355, 355])
    t7.setStyle(TableStyle([('BACKGROUND', (0,0), (-1,-1), c_card_bg), ('BOX', (0,0), (-1,-1), 1, c_border), ('INNERGRID', (0,0), (-1,-1), 1, c_border), ('PADDING', (0,0), (-1,-1), 12)]))
    story.append(t7)
    story.extend(make_footer(7))
    story.append(PageBreak())

    # -------------------------------------------------------------
    # SLIDE 8: AI & ML Architecture
    # -------------------------------------------------------------
    story.extend(make_header("AI &amp; Machine Learning", "Machine Learning (AI/ML) Integration Architecture", "Demographic Predictive Engine, NLP Schema Ingestion &amp; Speech Synthesis"))
    ml1 = [Paragraph("<b>1. Demographic Pattern Matching Engine</b>", card_header_style), Paragraph("Calculates a multi-attribute <b>Eligibility Compatibility Index</b> based on citizen age, income, caste, and occupation, ranking highest probability schemes first.", body_style)]
    ml2 = [Paragraph("<b>2. NLP Schema Ingestion &amp; Classification</b>", card_header_blue), Paragraph("Natural Language Processing (NLP) parses unorganized JSON payloads from <b>data.gov.in</b> to categorize new policies into domains like Health, Agriculture, etc.", body_style)]
    ml3 = [Paragraph("<b>3. Speech Processing (TTS Audio)</b>", card_header_green), Paragraph("Phonetic Speech Synthesis converts Hindi/English text into audio narration for zero-barrier accessibility for non-literate rural citizens.", body_style)]
    t_ml = Table([[ml1, ml2, ml3]], colWidths=[235, 235, 235])
    t_ml.setStyle(TableStyle([('BACKGROUND', (0,0), (-1,-1), c_card_bg), ('BOX', (0,0), (-1,-1), 1, c_border), ('INNERGRID', (0,0), (-1,-1), 1, c_border), ('PADDING', (0,0), (-1,-1), 12)]))
    story.append(t_ml)
    story.extend(make_footer(8))
    story.append(PageBreak())

    # -------------------------------------------------------------
    # SLIDE 9: Real-World Impact Matrix
    # -------------------------------------------------------------
    story.extend(make_header("Real-World Impact", "Real-World Deployment Impact Matrix", "Eliminating Middlemen Exploitation, Direct Benefit Transfer &amp; Rural Empowerment"))
    imp1 = [Paragraph("<b>1. 100% Elimination of Middlemen</b>", card_header_style), Paragraph("Direct official portal links (`pmkisan.gov.in`, `cmladlibehna.mp.gov.in`) eliminate unauthorized commission agent fees completely.", body_style)]
    imp2 = [Paragraph("<b>2. Direct Benefit Transfer (DBT) Uptake</b>", card_header_blue), Paragraph("Clear transparency on 🎯 <b>Target Group</b> &amp; Document Checklists prevents application rejection and speeds up DBT fund releases.", body_style)]
    imp3 = [Paragraph("<b>3. 90% Response Time Reduction</b>", card_header_green), Paragraph("Instant 1-click dialing for 8 core essential departments (Water, Power Discom 1912, PWD Roads, Municipal Corp) at village level.", body_style)]
    imp4 = [Paragraph("<b>4. Non-Literate Rural Empowerment</b>", card_header_style), Paragraph("Native Voice Assistance allows non-literate citizens to listen to scheme eligibility details in Hindi audio.", body_style)]
    t_imp = Table([[imp1, imp2], [imp3, imp4]], colWidths=[355, 355])
    t_imp.setStyle(TableStyle([('BACKGROUND', (0,0), (-1,-1), c_card_bg), ('BOX', (0,0), (-1,-1), 1, c_border), ('INNERGRID', (0,0), (-1,-1), 1, c_border), ('PADDING', (0,0), (-1,-1), 12)]))
    story.append(t_imp)
    story.extend(make_footer(9))
    story.append(PageBreak())

    # -------------------------------------------------------------
    # SLIDE 10: Tech Stack & Logos
    # -------------------------------------------------------------
    story.extend(make_header("Technology Stack", "Technology Stack Architecture &amp; Specification", "Modern Open-Web Standards Ensuring Zero Third-Party Framework Overhead"))
    tech_data = [
        [Paragraph("<b>HTML5</b><br/><font size=8 color='#8a99b5'>Semantic markup, ARIA roles &amp; DOM structure</font>", body_style),
         Paragraph("<b>CSS3 Vanilla</b><br/><font size=8 color='#8a99b5'>Glassmorphic design system &amp; HSL variables</font>", body_style),
         Paragraph("<b>JavaScript ES6+</b><br/><font size=8 color='#8a99b5'>Strict filter logic &amp; state DB matching</font>", body_style),
         Paragraph("<b>Python 3</b><br/><font size=8 color='#8a99b5'>HTTP Daemon server &amp; data pipelines</font>", body_style)],
        [Paragraph("<b>Typography Engine</b><br/><font size=8 color='#8a99b5'>Tiro Devanagari Hindi &amp; Plus Jakarta Sans</font>", body_style),
         Paragraph("<b>Iconography</b><br/><font size=8 color='#8a99b5'>Font Awesome 6.4 Free Vector Icons</font>", body_style),
         Paragraph("<b>Voice Synthesis</b><br/><font size=8 color='#8a99b5'>Web Speech API SpeechSynthesis</font>", body_style),
         Paragraph("<b>Deployment Server</b><br/><font size=8 color='#8a99b5'>Local HTTP Daemon on Port 8080</font>", body_style)]
    ]
    t10 = Table(tech_data, colWidths=[175, 175, 175, 175])
    t10.setStyle(TableStyle([('BACKGROUND', (0,0), (-1,-1), c_card_bg), ('BOX', (0,0), (-1,-1), 1, c_border), ('INNERGRID', (0,0), (-1,-1), 1, c_border), ('PADDING', (0,0), (-1,-1), 12)]))
    story.append(t10)
    story.extend(make_footer(10))
    story.append(PageBreak())

    # -------------------------------------------------------------
    # SLIDE 11: Conclusion & Impact
    # -------------------------------------------------------------
    story.extend(make_header("Conclusion &amp; Impact", "Conclusion, Social Impact &amp; Future Roadmap", "Democratizing Public Welfare Access and Removing Middlemen Exploitation"))
    col_end1 = [Paragraph("<b>Measurable Social Impact</b>", card_header_style), Spacer(1, 4), Paragraph("&bull; <b>Eliminating Middlemen:</b> Direct access to official application URLs prevents corruption and commission fees.<br/>&bull; <b>Empowering Rural Citizens:</b> 3-tier location lookup allows villagers to find emergency services instantly.<br/>&bull; <b>Increasing Scheme Uptake:</b> Transparent eligibility criteria help eligible citizens claim DBT funds.", body_style)]
    col_end2 = [Paragraph("<b>Future Expansion Roadmap</b>", card_header_blue), Spacer(1, 4), Paragraph("&bull; <b>WhatsApp AI Assistant Bot:</b> Instant scheme queries via WhatsApp messaging.<br/>&bull; <b>DigiLocker Integration:</b> Automatic document verification for single-click scheme eligibility checking.<br/>&bull; <b>Multilingual Support:</b> Full translation engine supporting <b>22 official Indian languages</b>.", body_style)]
    t11 = Table([[col_end1, col_end2]], colWidths=[355, 355])
    t11.setStyle(TableStyle([('BACKGROUND', (0,0), (-1,-1), c_card_bg), ('BOX', (0,0), (-1,-1), 1, c_border), ('INNERGRID', (0,0), (-1,-1), 1, c_border), ('PADDING', (0,0), (-1,-1), 12)]))
    story.append(t11)
    story.extend(make_footer(11))

    def draw_bg(canvas, doc):
        canvas.saveState()
        canvas.setFillColor(c_dark_bg)
        canvas.rect(0, 0, doc.pagesize[0], doc.pagesize[1], fill=True, stroke=False)
        canvas.restoreState()

    doc.build(story, onFirstPage=draw_bg, onLaterPages=draw_bg)
    print(f"Successfully generated {output_filename}")

if __name__ == "__main__":
    create_presentation_pdf()
