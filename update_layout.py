import re

# 1. Update index.html
with open('c:/Users/panua/projektit/web/panualaluusua.github.io/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# MOVE WORK EXPERIENCE
work_ex_pattern = re.compile(r'(\s*<!-- Work Experience Section -->.*?</section>)', re.DOTALL)
work_ex_match = work_ex_pattern.search(html)

if work_ex_match:
    work_ex_block = work_ex_match.group(1)
    # Remove it from the bottom
    html = html.replace(work_ex_block, '')
    # Optionally remove empty dividers left behind
    html = html.replace('    <div class="section-divider"></div>\n\n\n\n\n    <!-- Contact Section -->', '    <!-- Contact Section -->')
    
    # Insert it right before Projects Section
    proj_pattern = re.compile(r'(\s*<!-- Projects Section -->)')
    html = proj_pattern.sub(r'\1'.replace('<!-- Projects Section -->', f'{work_ex_block.strip()}\n\n    <div class="section-divider"></div>\n\n    <!-- Projects Section -->'), html, count=1)


# COMPACT SKILLS
skills_tech_pattern = re.compile(r'<div class="skill-category">\s*<h3>Technologies & Tools</h3>\s*<div class="skills-grid">.*?</div>\s*</div>', re.DOTALL)

skills_tech_new = """<div class="skill-category">
                    <h3>Technologies & Tools</h3>
                    <div class="skills-tags">
                        <span class="skill-tag"><i class="fas fa-sparkles"></i> Vector Search & RAG</span>
                        <span class="skill-tag"><i class="fas fa-cube"></i> MLflow & Model Serving</span>
                        <span class="skill-tag"><i class="fas fa-cubes"></i> Databricks & Spark</span>
                        <span class="skill-tag"><i class="fab fa-microsoft"></i> Azure (ADF, Synapse)</span>
                        <span class="skill-tag"><i class="fab fa-python"></i> Python & PySpark</span>
                        <span class="skill-tag"><i class="fas fa-code-branch"></i> dbt & Unity Catalog</span>
                        <span class="skill-tag"><i class="fab fa-docker"></i> Docker & Terraform</span>
                    </div>
                </div>"""
html = skills_tech_pattern.sub(skills_tech_new, html)


skills_domain_pattern = re.compile(r'<div class="skill-category">\s*<h3>Domain Knowledge \(Finance\)</h3>\s*<div class="skills-grid">.*?</div>\s*</div>', re.DOTALL)

skills_domain_new = """<div class="skill-category">
                    <h3>Domain Knowledge (Finance)</h3>
                    <div class="skills-tags">
                        <span class="skill-tag"><i class="fas fa-chart-line"></i> Corporate Finance</span>
                        <span class="skill-tag"><i class="fas fa-shield-alt"></i> Financial Risk Mgmt</span>
                        <span class="skill-tag"><i class="fas fa-calculator"></i> Financial Engineering</span>
                        <span class="skill-tag"><i class="fas fa-search-dollar"></i> Econometrics</span>
                        <span class="skill-tag"><i class="fas fa-university"></i> Banking & Insurance</span>
                    </div>
                </div>"""
html = skills_domain_pattern.sub(skills_domain_new, html)

# COMBINE CERTIFICATIONS AND MODULES
cert_section_pattern = re.compile(r'<!-- Certifications Section -->.*?</section>', re.DOTALL)

cert_section_new = """<!-- Credentials Section -->
    <section id="certifications" class="credentials-section">
        <div class="container">
            <div class="section-header">
                <h2>Certifications & Continuous Learning</h2>
                <div class="underline"></div>
                <p class="recruiter-note">My formal certifications and ongoing hands-on module achievements.</p>
            </div>
            
            <div class="credentials-grid">
                <!-- Left Column: Certs -->
                <div class="certs-column">
                    <h3 style="margin-bottom: 24px; font-size: 1.4rem;">Official Certifications</h3>
                    <div class="certifications-content" style="display: flex; flex-direction: column; gap: 24px;">
                        <div class="certification-card" style="border: 2px solid var(--primary-color); box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">
                            <div class="certification-logo">
                                <i class="fas fa-robot" style="color: var(--primary-color);"></i>
                            </div>
                            <div class="certification-details">
                                <h3>Databricks Certified Generative AI Engineer Associate</h3>
                                <p style="font-weight: 500; margin-bottom: 8px;">Issued February 17, 2026 • Expires February 17, 2028</p>
                                <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 12px;">Design and implement LLM-enabled solutions, RAG applications, and LLM chains using Databricks Vector Search, Model Serving, MLflow, and Unity Catalog.</p>
                                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                    <span class="cert-tag">GenAI</span>
                                    <span class="cert-tag">RAG</span>
                                    <span class="cert-tag">Vector Search</span>
                                    <span class="cert-tag">MLflow</span>
                                    <span class="cert-tag">LLM Chains</span>
                                </div>
                            </div>
                        </div>

                        <div class="certification-card">
                            <div class="certification-logo">
                                <i class="fas fa-certificate"></i>
                            </div>
                            <div class="certification-details">
                                <h3>Databricks Certified Data Engineer Associate</h3>
                                <p>Issued October 2022</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Modules -->
                <div class="modules-column">
                    <h3 style="margin-bottom: 24px; font-size: 1.4rem;">Microsoft Learn Modules</h3>
                    <div id="modules-list" class="modules-list">
                        <!-- Modules will be loaded here dynamically -->
                    </div>
                </div>
            </div>
        </div>
    </section>"""
html = cert_section_pattern.sub(cert_section_new, html)

# Update internal nav links if order matters?
# Nav actually just links to #ids, so no big deal logically. We can swap Work Experience and Projects in the nav.
nav_projects = r'<li><a href="#projects">Projects</a></li>'
nav_work = r'<li><a href="#work-experience">Work Experience</a></li>'

# Remove work exp from nav
html = html.replace(nav_work + '\n', '')
html = html.replace(nav_work, '')
# Insert work exp before projects
html = html.replace(nav_projects, f'{nav_work}\n                    {nav_projects}')

with open('c:/Users/panua/projektit/web/panualaluusua.github.io/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# 2. Update styles.css
with open('c:/Users/panua/projektit/web/panualaluusua.github.io/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

new_css_additions = """
/* Skill Tags */
.skills-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}
.skill-tag {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 10px 18px;
    border-radius: 100px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 0.95rem;
    color: var(--text-main);
    transition: 0.2s;
}
.skill-tag i {
    color: var(--primary-color);
    font-size: 1.1rem;
}
.skill-tag:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
    background: rgba(30, 41, 59, 0.8);
}

/* Credentials Layout */
.credentials-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.cert-tag {
    font-size: 0.75rem; 
    background: rgba(59, 130, 246, 0.15); 
    color: var(--secondary-color); 
    padding: 4px 10px; 
    border-radius: 12px;
}

@media (max-width: 992px) {
    .credentials-grid {
        grid-template-columns: 1fr;
    }
}
"""

# Append new styles before media queries or at end
css += new_css_additions

# Tweak certification card styles to be smaller padding since they share the screen now
css = css.replace('.certification-card {\n    background: var(--card-bg);\n    padding: 40px;', 
                  '.certification-card {\n    background: var(--card-bg);\n    padding: 24px;')
css = css.replace('.certification-logo {\n    font-size: 4rem;',
                  '.certification-logo {\n    font-size: 3rem;')

with open('c:/Users/panua/projektit/web/panualaluusua.github.io/styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updates completed successfully.")
