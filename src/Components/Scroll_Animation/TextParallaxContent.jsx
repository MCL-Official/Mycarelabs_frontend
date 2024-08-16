import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import img from "../../Assets/img.jpg";
import img1 from "../../Assets/img3.jpg";
import img2 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.png";
import img3 from "../../Assets/img2.jpg";

const ExampleContent = () => (
  <div className="mx-auto container">
    {/* <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here fhfhdhsh
    </h2> */}
    <div className="col-span-1 md:col-span-8">
      {/* <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        MyCare Labs offers comprehensive toxicology testing services,
        ensuring accurate and timely results for various needs.
        Their state-of-the-art facilities and experienced professionals
        provide reliable screening for drugs, alcohol, and other substances.
      </p> */}
       <ul class="space-y-4 text-justify">
            <li class="flex items-start">
                <svg class="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none"/>
                </svg>
                <p class="text-lg"><strong>Anatomy of the Thyroid Gland  : </strong>The thyroid gland, situated in the front of the neck just below the Adam's apple, consists of two lobes connected by a narrow isthmus. This gland produces thyroid hormones, primarily thyroxine (T4) and triiodothyronine (T3), which play a vital role in maintaining the body's balance.</p>
            </li>
            <li class="flex items-start">
                <svg class="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none"/>
                </svg>
               
                <p class="text-lg"><strong>T4 (Thyroxine):</strong>  The main hormone produced by the thyroid gland. It gets converted into T3 in tissues and organs, influencing metabolism.</p>
            </li>
            <li class="flex items-start">
                <svg class="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none"/>
                </svg>
               
                <p class="text-lg"><strong>T3 (Triiodothyronine): </strong> The active form of thyroid hormone directly affecting metabolism, heart rate, and body temperature.</p>
            </li>
            <li class="flex items-start">
                <svg class="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none"/>
                </svg>
                <p class="text-lg"><strong>Calcitonin :</strong> Regulates calcium levels in the blood and contributes to bone health.</p>
            </li>
        
            <button className="w-full rounded bg-blue-600 px-9 py-4 text-xl text-white transition-colors hover:bg-blue-500 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
        </ul>
     
    </div>
  </div>
);

const ExampleContent1 = () => (
  <div className="mx-auto container">
    {/* <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2> */}
    <div className="col-span-1 md:col-span-8">
    <ul class="space-y-4 text-justify">
            <li class="flex items-start">
                <svg class="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none"/>
                </svg>
                <p class="text-lg"><strong>Hypothyroidism: </strong>Insufficient production of thyroid hormones, leading to a slow metabolism.</p>
            </li>
            <li class="flex items-start">
                <svg class="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none"/>
                </svg>
                <p class="text-lg"><strong>Hypothyroidism: </strong>Excessive production of thyroid hormones, causing an overactive metabolism.</p>
            </li>
            <li class="flex items-start">
                <svg class="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none"/>
                </svg>
               
                <p class="text-lg"><strong>Hashimoto's Thyroiditis:</strong>  An autoimmune condition where the immune system attacks the thyroid, often causing hypothyroidism.</p>
            </li>
            <li class="flex items-start">
                <svg class="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none"/>
                </svg>
                <p class="text-lg"><strong>Graves' Disease:</strong> Another autoimmune disorder causing hyperthyroidism due to antibodies stimulating the thyroid</p>
            </li>
     
            <button className="w-full rounded bg-blue-600 px-9 py-4 text-xl text-white transition-colors hover:bg-blue-500 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
        </ul>
      {/* <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        MyCare Labs provides top-tier testing solutions for infectious diseases,
        featuring an all-in-one swab for COVID-19, Influenza A/B, and RSV.
        Discover comprehensive and advanced diagnostics with MyCare Labs'
        reliable services.
      </p> */}
      
    </div>
  </div>
);

const ExampleContent2 = () => (
  <div className="mx-auto container">
    {/* <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2> */}
    <div className="col-span-1 md:col-span-8">
      {/* <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        MyCare Labs provides the best testing solutions, prioritizing
        your well-being with comprehensive wellness testing services.
        Take proactive steps towards a healthier, happier you with
        MyCare Labs' advanced diagnostics.
      </p> */}
       <ul class="space-y-4 text-justify">
            <li class="flex items-start">
                <svg class="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none"/>
                </svg>
                <p class="text-lg"><strong>Unexplained Weight Changes: </strong>Both weight gain and loss can be symptoms of thyroid dysfunction.</p>
            </li>
            <li class="flex items-start">
                <svg class="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none"/>
                </svg>
               
                <p class="text-lg"><strong>Cardiac Health Evaluation :</strong>  An underactive thyroid can lead to persistent fatigue.</p>
            </li>
            <li class="flex items-start">
                <svg class="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none"/>
                </svg>
                <p class="text-lg"><strong>Fatigue and Weakness: :</strong> CK blood tests are also used to monitor the effects of certain medications that might cause muscle damage as a side effect.</p>
            </li>
            <li class="flex items-start">
                <svg class="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none"/>
                </svg>
                <p class="text-lg"><strong>Mood Changes:</strong> Thyroid imbalances may contribute to mood swings and depression.</p>
            </li>
            <li class="flex items-start">
                <svg class="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none"/>
                </svg>
                <p class="text-lg"><strong>Irregular Menstrual Cycles: </strong> Thyroid disorders can affect menstrual regularity.</p>
            </li>
            <li class="flex items-start">
                <svg class="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    <circle cx="12" cy="12" r="10" stroke-width="2" stroke="currentColor" fill="none"/>
                </svg>
                <p class="text-lg"><strong>Cold Sensitivity or Heat Intolerance:</strong> Thyroid hormones regulate body temperature.</p>
            </li>
            <button className="w-full rounded bg-blue-600 px-9 py-4 text-xl text-white transition-colors hover:bg-blue-500 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
        </ul>
     
    </div>
  </div>
);

const ExampleContent3 = () => (
  <div className="mx-auto container">
    <div className="col-span-1 md:col-span-8">
      <ul className="space-y-4 text-justify">
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Assessment of Muscle Damage :</strong> Elevated CK levels in the blood often indicate muscle damage due to injury, trauma, strenuous exercise, or conditions like myositis and muscular dystrophy.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Cardiac Health Evaluation :</strong> CK-MB levels are particularly useful in diagnosing heart-related issues, such as myocardial infarction (heart attack). Elevated CK-MB levels can suggest damage to heart muscle cells.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Monitoring Treatment :</strong> CK blood tests are also used to monitor the effects of certain medications that might cause muscle damage as a side effect.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Diagnosis and Management :</strong> managing various neuromuscular disorders and conditions affecting the brain, such as brain trauma or tumors.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Thyroid-Stimulating Hormone (TSH) :</strong> TSH, produced by the pituitary gland, stimulates the thyroid to produce T4 and T3. Elevated TSH levels may indicate hypothyroidism, while low levels may suggest hyperthyroidism.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Free Thyroxine (FT4) and Free Triiodothyronine (FT3) :</strong> FT4 and FT3 represent the unbound, active forms of T4 and T3. These tests measure the amount of available hormones in the bloodstream, providing insight into thyroid activity.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Thyroid Peroxidase Antibodies (TPOAb) and Thyroglobulin Antibodies (TgAb) :</strong> Antibodies against thyroid peroxidase (TPO) and thyroglobulin (Tg) are markers for autoimmune thyroid disorders like Hashimoto's and Graves' disease.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Total Thyroxine (T4) and Total Triiodothyronine (T3) :</strong> Total T4 and T3 measure the overall amount of these hormones in the blood, including both bound and unbound forms.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Reverse Triiodothyronine (rT3) :</strong> rT3 is a less common test that evaluates the inactive form of T3. Elevated levels may indicate a non-thyroidal illness.</p>
        </li>
      </ul>
      <button className="w-full rounded bg-blue-600 px-9 py-4 text-xl text-white transition-colors hover:bg-blue-500 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const ExampleContent4 = () => (
  <div className="mx-auto container">
    <div className="col-span-1 md:col-span-8">
      <ul className="space-y-4 text-justify">
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Assessment of Muscle Damage :</strong> Elevated CK levels in the blood often indicate muscle damage due to injury, trauma, strenuous exercise, or conditions like myositis and muscular dystrophy.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Cardiac Health Evaluation :</strong> CK-MB levels are particularly useful in diagnosing heart-related issues, such as myocardial infarction (heart attack). Elevated CK-MB levels can suggest damage to heart muscle cells.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Monitoring Treatment :</strong> CK blood tests are also used to monitor the effects of certain medications that might cause muscle damage as a side effect.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Diagnosis and Management :</strong> managing various neuromuscular disorders and conditions affecting the brain, such as brain trauma or tumors.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Interpreting Thyroid Function Panel Results :</strong></p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Normal Ranges and Values :</strong> Understanding the normal ranges for each component is essential for accurate interpretation. Ranges may vary slightly among laboratories.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Hypothyroidism :</strong> Elevated TSH: A primary indicator of an underactive thyroid. Low FT4 and FT3: Reduced levels of free hormones contribute to symptoms.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Hyperthyroidism :</strong> Low TSH: A sign of an overactive thyroid.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Elevated FT4 and FT3 :</strong> Increased levels of free hormones may lead to hyperthyroid symptoms.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Positive TPOAb and TgAb :</strong> Presence of antibodies indicates an autoimmune thyroid condition.</p>
        </li>
      </ul>
      <button className="w-full rounded bg-blue-600 px-9 py-4 text-xl text-white transition-colors hover:bg-blue-500 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const ExampleContent5 = () => (
  <div className="mx-auto container">
    <div className="col-span-1 md:col-span-8">
      <ul className="space-y-4 text-justify">
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Assessment of Muscle Damage :</strong> Elevated CK levels in the blood often indicate muscle damage due to injury, trauma, strenuous exercise, or conditions like myositis and muscular dystrophy.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Cardiac Health Evaluation :</strong> CK-MB levels are particularly useful in diagnosing heart-related issues, such as myocardial infarction (heart attack). Elevated CK-MB levels can suggest damage to heart muscle cells.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Monitoring Treatment :</strong> CK blood tests are also used to monitor the effects of certain medications that might cause muscle damage as a side effect.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Diagnosis and Management :</strong> managing various neuromuscular disorders and conditions affecting the brain, such as brain trauma or tumors.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Interpreting Thyroid Function Panel Results :</strong></p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Normal Ranges and Values :</strong> Understanding the normal ranges for each component is essential for accurate interpretation. Ranges may vary slightly among laboratories.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Hypothyroidism :</strong> Elevated TSH: A primary indicator of an underactive thyroid. Low FT4 and FT3: Reduced levels of free hormones contribute to symptoms.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Hyperthyroidism :</strong> Low TSH: A sign of an overactive thyroid.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Elevated FT4 and FT3 :</strong> Increased levels of free hormones may lead to hyperthyroid symptoms.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Positive TPOAb and TgAb :</strong> Presence of antibodies indicates an autoimmune thyroid condition.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Importance of Regular Monitoring and Follow-Up :</strong></p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Managing Thyroid Conditions :</strong> For individuals diagnosed with thyroid disorders, regular monitoring is crucial for effective management. Medication adjustments and lifestyle modifications may be necessary.</p>
        </li>
        <li className="flex items-start">
          <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
          <p className="text-lg"><strong>Lifestyle Factors Impacting Thyroid Health :</strong> Certain lifestyle factors can influence thyroid function, including diet, stress management, and adequate sleep. Addressing these factors can support overall thyroid health.</p>
        </li>
      </ul>
      <button className="w-full rounded bg-blue-600 px-9 py-4 text-xl text-white transition-colors hover:bg-blue-500 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const contentData = [
  {
    imgUrl: img1,
    subheading: "Toxicology",
    heading: "1. Why Are Thyroid Profile Tests Done?",
    content: <ExampleContent />,
  },
  {
    imgUrl: img3,
    subheading: "Quality",
    heading: "2. Understanding the Thyroid Profile Test:",
    content: <ExampleContent1 />,
  },
  {
    imgUrl: img2,
    subheading: "Wellness Testing",
    heading: "3. Why Choose Our Lab for Thyroid Profile Testing?",
    content: <ExampleContent2 />,
  },
  {
    imgUrl: img,
    subheading: "Mobile Testing",
    heading: "4. The Thyroid Profile Testing Process:",
    content: <ExampleContent3 />,
  },
  {
    imgUrl: "https://www.rabkindermpath.com/blog/admin/uploads/2022/laboratory_1_1668587970.jpg",
    subheading: "Mobile Testing",
    heading: "5. Educational Resources",
    content: <ExampleContent4 />,
  },
  {
    imgUrl: "https://i.ibb.co/pvBkRYq/2.png",
    subheading: "Mobile Testing",
    heading: "6. Common Thyroid Tests",
    content: <ExampleContent5 />,
  },
];

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
       <h3 className="flex justify-center text-2xl font-bold bg-transparent pt-14">
    <div className="relative inline-block -mt-12 bg-transparent">
      <span className="text-blue-600 text-4xl font-bold mr-2">Introduction</span>
      <span className="text-orange-600 text-4xl font-bold">To Thyroid</span>
    <p className="info-description">
    In the pursuit of optimal health and wellness, individuals today are turning to advance diagnostics and personalized medicine. MY CARE LABS,
     a trailblazer in the healthcare industry, stands at the forefront with its cutting-edge Therapeutic Wellness Tests. This comprehensive guide 
     aims to delve into the significance of therapeutic tests, the intricacies of therapeutic drug monitoring, and shed light on specific types
      such as Amikacin, Caffeine, Digitoxin, Primidone, Methotrexate, Quinidine, Phenytoin, Digoxin, Lidocaine, and Phenobarbital.
        </p>
    </div>
  </h3>
      {contentData.map((item, index) => (
        <TextParallaxContent
          key={index}
          imgUrl={item.imgUrl}
          subheading={item.subheading}
          heading={item.heading}
        >
          {item.content}
        </TextParallaxContent>
      ))}
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    > 
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
        <h3 className="flex justify-center text-2xl font-bold bg-transparent pt-8">
          <div className="relative inline-block -mt-12 bg-transparent">
            {/* <span className="text-blue-600 text-4xl font-bold mr-2">we</span> */}
            {/* <span className="text-gray-600 text-4xl font-bold">We Serve In.</span> */}
          </div>
        </h3>
      {/* <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p> */}
      <p className="text-center text-4xl font-bold md:text-7xl  text-orange-500">{heading}</p>
    </motion.div>
  );
};
