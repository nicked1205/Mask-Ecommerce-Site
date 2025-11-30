import Mask from '../../assets/mask/mask-1.jpg';
import MaskPackage from '../../assets/mask/mask-package-front.jpg'

function CompanyOverview() {
  return (
    <section className="px-6 pb-12 pt-24 max-w-5xl mx-auto bg-[#f9f9f9] rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Company Overview</h1>

      <p className="mb-4">
        During fire, most casualties are caused by toxic gas. In addition, oxygen
        concentration drops rapidly on a fire site.
      </p>

      <p className="mb-6">
        <strong>
          Saving Story is a company manufacturing flame-retardant products such
          as Life Saving Towel and Life Saving Mask, which are personal fire
          evacuation supplies.
        </strong>{" "}
        Saving Story will fulfill its responsibility as a protector of citizens’
        lives through continuous technological innovation.
      </p>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-4 border rounded shadow">
          <img src={MaskPackage} alt="Life Saving Mask Package" className="mb-2" />
          <p>Life Saving Mask Package</p>
        </div>
        <div className="p-4 border rounded shadow">
          <img src={Mask} alt="Life Saving Mask" className="mb-2" />
          <p>Life Saving Mask</p>
        </div>
      </div>
    </section>
  );
}

export default CompanyOverview;