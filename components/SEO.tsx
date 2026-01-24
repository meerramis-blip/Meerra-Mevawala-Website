
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, schema }) => {
  const location = useLocation();
  const baseUrl = "https://www.meerramevawala.com";
  const fullTitle = title ? `${title} | Meerra Mevawala` : "Meerra Mevawala | Luxury Makeup Studio & Academy Mumbai";
  const defaultDesc = "Meerra Mevawala - Premier International School of Makeup (MIS) and Luxury Bridal Studio in Mumbai. CIDESCO certified courses, HD Bridal Makeup, and professional training.";

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description || defaultDesc);

    // Update Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords || "makeup artist mumbai, bridal makeup ghatkopar, makeup academy mumbai, CIDESCO courses india, professional makeup school");

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${baseUrl}${location.pathname}`);

    // Schema.org JSON-LD
    const existingSchema = document.getElementById('json-ld-schema');
    if (existingSchema) {
      existingSchema.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [fullTitle, description, keywords, schema, location]);

  return null;
};

export default SEO;
